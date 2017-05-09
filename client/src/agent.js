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

export default {
    Tweet
}