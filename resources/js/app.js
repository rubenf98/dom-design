import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import reducer from './reducer'
import ReactDOM from 'react-dom';
import Router from './router';

ReactDOM.render(
    <Router />,
    document.getElementById('index')
)