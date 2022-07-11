import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import reducer from './reducer'
import ReactDOM from 'react-dom';
import Router from './router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            promise,
        )
    )
)
if (!localStorage.language) {
    localStorage.setItem("language", "pt")
}


ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('index')
)