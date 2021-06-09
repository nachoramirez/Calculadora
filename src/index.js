import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import App from './app'
import Reducer from './reducers/Reducer'

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk)
)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('app')
)