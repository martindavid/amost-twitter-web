import { combineReducers } from 'redux';

import home from './home';
import sentiment from './sentiment';
import map from './map';

const rootReducer = combineReducers({
    home,
    sentiment,
    map
});

export default rootReducer;