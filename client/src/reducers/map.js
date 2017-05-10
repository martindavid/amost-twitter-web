export default (state={}, action) => {
    switch (action.type) {
        case "SENTIMENT_MAP_ON_LOAD":
            return {
                ...state,
                mapData: action.payload[0]
            }
        default:
            return state;
    }
}