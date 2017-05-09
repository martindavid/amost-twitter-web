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
const wordListViewUrl = word_db + "_design/analytics/_view/word_list";

router.get('/time', function(req, res) {
    request(conversationTimeViewUrl, function(error, response, body) {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            data = JSON.parse(body);
            res.status(200).send(data);
        }
    });
});

router.get('/date', function(req, res) {
    request(conversationDateViewUrl, function(error, response, body) {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body)
            res.status(200).send(data.rows);
        }
    });
});

router.get('/top-word', function(req, res) {
    request(wordCountViewUrl, function(error, response, body) {
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

router.get('/word', function(req, res) {
    request(wordListViewUrl, function(error, response, body) {
        if (error) {
            res.status(response.statusCode).send(error);
        } else {
            const data = JSON.parse(body);
            console.log(data);
            const parsedResult = data.rows.map((val, i) => {
                return {
                    text: val.key,
                    value: val.value
                }
            });
            res.status(200).send(parsedResult);
        }
    });
});

router.get('/top-hashtag', function(req, res) {
    request(hashtagsCountViewUrl, function(error, response, body) {
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