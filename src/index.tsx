import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'

export type DialogsDataType = Array<{ id: string; name: string }>
export type MessagesArrayDataType = {
    id: string
    message: string
}
export type MessagesDataType = Array<MessagesArrayDataType>
export type PostType = {
    id: string
    message: string
    likeCount: number
}

let dialogs: DialogsDataType = [
    { id: '1', name: 'William' },
    { id: '2', name: 'Rita' },
    { id: '3', name: 'Leo' },
    { id: '4', name: 'Mia' },
    { id: '5', name: 'Monika' },
]

let messages: MessagesDataType = [
    { id: '1', message: 'Hi, check it out!' },
    { id: '2', message: 'Wow, nice to see you...' },
    { id: '3', message: 'Where have you been all this time?' },
    { id: '4', message: 'I just arrived from Miami!' },
]

let posts: Array<PostType> = [
    { id: '1', message: "Hi, what's up?", likeCount: 15 },
    { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
    { id: '3', message: 'Perfect!', likeCount: 8 },
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />,
    document.getElementById('root')
)
