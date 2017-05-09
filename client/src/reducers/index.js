import { combineReducers } from 'redux';

import common from './common';
import home from './home';

const rootReducer = combineReducers({
    common,
    home
});

export default rootReducer;