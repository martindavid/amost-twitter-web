export default (state={}, action) => {
    switch(action.type) {
        case 'HOME_ON_LOAD':
            return {
                ...state,
                groupingTimeData: action.payload[0],
                groupingDateData: action.payload[1],
                topHashtag: action.payload[2],
                topKeyword: action.payload[3],
                wordList: action.payload[4]
            }
        default:
            return state;
    }
}