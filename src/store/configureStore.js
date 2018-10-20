import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState'
import rootReducer from './reducers/rootReducer';


export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        ),
    );
}