export default (state={}, action) => {
    switch(action.type) {
        case 'HOME_ON_LOAD':
            const tweetInfo = action.payload[5];
            return {
                ...state,
                groupingTimeData: action.payload[0],
                groupingDateData: action.payload[1],
                topHashtag: action.payload[2],
                topKeyword: action.payload[3],
                wordList: action.payload[4],
                dataInfo: tweetInfo,
                allTweetCount: tweetInfo.data_size,
                victoriaTweet: tweetInfo.tweet_size
            }
        case 'HOME_ON_TWEET_UPDATE':
            return {
                ...state,
                allTweetCount: action.payload.data_size,
                victoriaTweet: action.payload.tweet_size
            }
        default:
            return state;
    }
}