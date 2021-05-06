import React from 'react';
import ReactDom from 'react-dom';
import { Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'
import multi from 'redux-multi'
import reducers from './main/reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)