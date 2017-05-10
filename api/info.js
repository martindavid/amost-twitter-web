const express = require('express');
const request = require('request')
const rp = require('request-promise');
const router = express.Router();


const root_url = process.env.COUCHDB_TWEETS;
const users_db = process.env.COUCHDB_TWEET_USERS;
const allDocsView = root_url + "_all_docs?limit=1";
const groupByDateView = root_url + "_design/analytics/_view/conversation-date-breakdown\?reduce\=true\&group_level\=0";
const userCountView = users_db + "_design/analytics/_view/gender_count?reduce=true&group=true";

// TODO: please refactor this callback hell
router.get('/', (req, res) => {
    rp(allDocsView).then((response) => {
        const allDocInfo = JSON.parse(response);
        rp(groupByDateView).then((tweets) => {
            const tweetInfo = JSON.parse(tweets);
            const info = {
                data_size: allDocInfo.total_rows,
                tweet_size: tweetInfo.rows[0].value,
                male: 0,
                female: 0,
                unknown: 0
            }
            rp(userCountView).then((users) => {
                const userData = JSON.parse(users).rows;
                userData.forEach((val, i) => {
                    if (val.key === null) { info.unknown = val.value; }
                    if (val.key === "female") { info.female = val.value; }
                    if (val.key === "male") { info.male = val.value }
                })
                res.status(200).send(info);
            })
        })
    })
    .catch((err) => {
        res.status(500).send(err);
    })
});

module.exports = router;