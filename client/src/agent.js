import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => {
    return res.body;
}

const requests = {
    del: url =>
        superagent.del(url).then(responseBody),
    get: url =>
        superagent.get(url).then(responseBody),
    post: (url, body) =>
        superagent.post(url, body).then(responseBody),
    put: (url, body) =>
        superagent.put(url, body).then(responseBody)
};

const Tweet = {
    getDateBreakdown: () =>
        requests.get('api/tweets/date'),
    getTimeBreakdown: () =>
        requests.get('api/tweets/time'),
    getTopWord: () =>
        requests.get('api/tweets/top-word'),
    getTopHashtag: () =>
        requests.get('api/tweets/top-hashtag'),
    getWordList: () =>
        requests.get('api/tweets/word')
}

const TweetSentiment = {
    get: () =>
        requests.get('api/sentiment'),
    getDateBreakDown: () =>
        requests.get('api/sentiment/date'),
    getTimeBreakDown: () =>
        requests.get('api/sentiment/time')
}

const TweetMap = {
    get: () =>
        requests.get('api/map')
}

const Info = {
    get: () =>
        requests.get('api/info')
}

export default {
    Tweet,
    TweetSentiment,
    TweetMap,
    Info
}