export default (state={}, action) => {
    switch (action.type) {
        case 'SENTIMENT_ON_LOAD':
            return {
                ...state,
                sentiment: action.payload[0],
                sentimentByDate: action.payload[1],
                sentimentByTime: action.payload[2]
            }
        default:
            return state;
    }
}