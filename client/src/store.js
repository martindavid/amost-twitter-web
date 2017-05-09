import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { promiseMiddleware } from './middleware';

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware);
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        getMiddleware()
    );

    return store;
}