import React from 'react'
import './reset.css'
import './index.css'
import { rerenderEntireTree } from './render'
import { applicationState } from './redux/state'

rerenderEntireTree(applicationState)
