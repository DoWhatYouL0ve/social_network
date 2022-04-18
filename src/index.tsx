import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import { applicationState } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    // BrowserRouter - for all links to work properly
    <BrowserRouter>
        <App appState={applicationState} />
    </BrowserRouter>,
    document.getElementById('root')
)
