import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import { store, StateType } from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './StoreContext'

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        // BrowserRouter - for all links to work properly
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
