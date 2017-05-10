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
                const finalData = aggregateResult.map((val,i) => {
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
            res.status(200).send(finalData);
        }).catch((err) => {
            res.status(500).send(err);
        })
    }).catch((err) =>{
        res.status(500).send(err);
    })
})

// Pretty shit way to convert int (hours) to formatted time
const formatTime = (hours) => {
    if (hours > 9) {
        return hours + ":00";
    }
    else {
        return "0" + hours + ":00";
    }
}

module.exports = router;