export default (state={}, action) => {
    switch (action.type) {
        case "SENTIMENT_MAP_ON_LOAD":
            return {
                ...state,
                mapData: action.payload[0]
            }
        case 'SENTIMENT_ON_TWEET_LOAD':
            return {
                ...state,
                tweetText: action.payload
            }
        default:
            return state;
    }
}