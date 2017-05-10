import { combineReducers } from 'redux';

import home from './home';
import sentiment from './sentiment';

const rootReducer = combineReducers({
    home,
    sentiment
});

export default rootReducer;