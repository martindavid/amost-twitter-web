const express = require('express');
const request = require('request');
const router = express.Router();

const root_url = process.env.COUCHDB_TWEETS;
const sentimentMapViewUrl = root_url + "_design/analytics/_view/sentiment-coordinates?limit=10000";

router.get('/', (req, res) => {
    request(sentimentMapViewUrl, (error, response, body) => {
        if (error) {
            res.status(500).send(error);
        } else {
            var data = JSON.parse(body).rows;
            
            const finalData = {
                type: "FeatureCollection",
                features: data.map((val, i) => {
                    return val.value;
                })
            }
            res.status(200).send(finalData);
        }
    })
})

module.exports = router;