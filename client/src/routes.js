import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import ExtraTopic from './containers/ExtraTopic';

export default (
    <Route>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/extra" component={ExtraTopic} />
        </Route>
    </Route>
)