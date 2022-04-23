import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import { addPost, StateType, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

export let rerenderEntireTree = (applicationState: StateType) => {
    ReactDOM.render(
        // BrowserRouter - for all links to work properly
        <BrowserRouter>
            <App
                appState={applicationState}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
