const express = require('express');
const request = require('request');
const rp = require('request-promise');
const router = express.Router();

const root_url = process.env.COUCHDB_TWEETS;

const conversationTimeViewUrl = root_url + "_design/analytics/_view/conversation-time-breakdown?reduce=true&group=true";
const conversationDateViewUrl = root_url + "_design/analytics/_view/conversation-date-breakdown?reduce=true&group=true";
const sentimentBreakDown = root_url + "_design/analytics/_view/sentiment-by-date?reduce=true&group_level=1";
const sentimentByDateViewUrl = root_url + "_design/analytics/_view/sentiment-by-date?reduce=true&group=true";
const sentimentByTimeViewUrl = root_url + "_design/analytics/_view/sentiment-by-time?reduce=true&group=true";

router.get('/', (req, res) => {
    request(sentimentBreakDown, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            data = JSON.parse(body);
            const parsedResult = data.rows.map((val, i) => {
                return {
                    name: val.key[0],
                    y: val.value
                }
            });
            res.status(200).send(parsedResult);
        }
    });
});

router.get('/time', (req, res) => {
    // Fetch tweet break down by time first then process the sentiment data by time next
    rp(conversationTimeViewUrl)
        .then((tweetByTime) => {
            var data = JSON.parse(tweetByTime)
            // Construct tweet grouping by time array
            const aggregateResult = data.rows.map((val, i) => {
                return {
                    key: val.key,
                    time: formatTime(val.key),
                    tweet_count: val.value,
                    pos: 0,
                    neg: 0,
                    net: 0
                };
            });

            // Fetch sentiment data group by time
            rp(sentimentByTimeViewUrl).then((sentimentByTime) => {
                const sentimentData = JSON.parse(sentimentByTime).rows;
                // filter sentimentByTime data and map it with aggregateResult
                const finalData = aggregateResult.map((val, i) => {
                    var search = sentimentData.filter(x => x.key[1] === val.key);
                    if (search && search.length > 0) {
                        search.forEach((elem) => {
                            if (elem.key[0] === "negative") { val.neg = elem.value }
                            if (elem.key[0] === "positive") { val.pos = elem.value }
                            if (elem.key[0] === "neutral") { val.net = elem.value }
                        });
                    }
                    return val;
                });
                finalData.sort((a, b) => {
                    const valA = a.time;
                    const valB = b.time;
                    if (valA < valB) {
                        return -1;
                    }
                    if (valA > valB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
                res.status(200).send(finalData);
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

router.get('/date', (req, res) => {
    // Fetch tweet break down by date first then process the sentiment data by date next
    rp(conversationDateViewUrl).then((conversationByDateData) => {
        var data = JSON.parse(conversationByDateData);
        const aggregateResult = data.rows.map((val, i) => {
            return {
                key: val.key,
                tweet_count: val.value,
                pos: 0,
                neg: 0,
                net: 0
            };
        });

        rp(sentimentByDateViewUrl).then((sentimentByDate) => {
            var sentimentData = JSON.parse(sentimentByDate).rows;
            // filter sentimentByDate data and map it with aggregateResult array
            const finalData = aggregateResult.map((val, i) => {
                var search = sentimentData.filter(x => x.key[1] === val.key);
                if (search && search.length > 0) {
                    search.forEach((elem) => {
                        if (elem.key[0] === "negative") { val.neg = elem.value }
                        if (elem.key[0] === "positive") { val.pos = elem.value }
                        if (elem.key[0] === "neutral") { val.net = elem.value }
                    });
                }
                return val;
            });
            
            finalData.sort((a, b) => {
                return new Date(a.key) - new Date(b.key);
            });

            res.status(200).send(finalData.slice(Math.max(finalData.length - 30, 1)));
        }).catch((err) => {
            res.status(500).send(err);
        })
    }).catch((err) => {
        res.status(500).send(err);
    })
})

// Pretty shit way to convert int (hours) to formatted time
const formatTime = (hours) => {
    switch (hours) {
        case 0:
            return "10:00";
        case 1:
            return "11:00";
        case 2:
            return "12:00";
        case 3:
            return "13:00";
        case 4:
            return "14:00";
        case 5:
            return "15:00";
        case 6:
            return "16:00";
        case 7:
            return "17:00";
        case 8:
            return "18:00";
        case 9:
            return "19:00";
        case 10:
            return "20:00";
        case 11:
            return "21:00";
        case 12:
            return "22:00";
        case 13:
            return "23:00";
        case 14:
            return "00:00";
        case 15:
            return "01:00";
        case 16:
            return "02:00";
        case 17:
            return "03:00";
        case 18:
            return "04:00";
        case 19:
            return "05:00";
        case 20:
            return "06:00";
        case 21:
            return "07:00";
        case 22:
            return "08:00";
        case 23:
            return "09:00";
    }
}

module.exports = router;