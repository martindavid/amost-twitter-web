const express = require('express');
const request = require('request')
const router = express.Router();

const root_url = process.env.COUCHDB_TWEETS;
const word_db = process.env.COUCHDB_TWEET_WORDS;
const hashtag_db = process.env.COUCHDB_TWEET_HASHTAGS;
const users_db = process.env.COUCHDB_TWEET_USERS;

const conversationTimeViewUrl = root_url + "_design/analytics/_view/conversation-time-breakdown?reduce=true&group=true";
const conversationDateViewUrl = root_url + "_design/analytics/_view/conversation-date-breakdown?reduce=true&group=true";
const wordCountViewUrl = word_db + "_design/analytics/_view/word_count?limit=10&descending=true&group=true";
const hashtagsCountViewUrl = hashtag_db + "_design/analytics/_view/sum_hashtags?limit=10&descending=true&group=true";
const wordListViewUrl = word_db + "_design/analytics/_view/word_count?limit=200&descending=true&group=true";

router.get('/time', (req, res) => {
    request(conversationTimeViewUrl, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            data = JSON.parse(body);
            res.status(200).send(data);
        }
    });
});

router.get('/date', (req, res) => {
    request(conversationDateViewUrl, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body)
            res.status(200).send(data.rows);
        }
    });
});

router.get('/top-word', (req, res) => {
    request(wordCountViewUrl, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body);
            const parsedResult = data.rows.map((val, i) => {
                return {
                    word: val.key[1],
                    count: val.key[0]
                }
            });
            res.status(200).send(parsedResult);
        }
    });
});

router.get('/word', (req, res) => {
    request(wordListViewUrl, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body);
            const parsedResult = data.rows.map((val, i) => {
                return {
                    text: val.key[1],
                    value: val.key[0]
                }
            });
            res.status(200).send(parsedResult);
        }
    });
});

router.get('/top-hashtag', (req, res) => {
    request(hashtagsCountViewUrl, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body);
            const parsedResult = data.rows.map((val, i) => {
                return {
                    hashtag: val.key[1],
                    count: val.key[0]
                }
            });
            res.status(200).send(parsedResult);
        }
    });
});

module.exports = router;