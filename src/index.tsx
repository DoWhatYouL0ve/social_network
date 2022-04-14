import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import { applicationState } from './redux/state'

ReactDOM.render(
    <App appState={applicationState} />,
    document.getElementById('root')
)
