import { rerenderEntireTree } from '../render'

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
export type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
}
export type ProfilePagePostsType = {
    posts: Array<PostType>
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePagePostsType
}

export let applicationState: StateType = {
    dialogsPage: {
        dialogs: [
            { id: '1', name: 'William' },
            { id: '2', name: 'Rita' },
            { id: '3', name: 'Leo' },
            { id: '4', name: 'Mia' },
            { id: '5', name: 'Monika' },
        ],
        messages: [
            { id: '1', message: 'Hi, check it out!' },
            { id: '2', message: 'Wow, nice to see you...' },
            { id: '3', message: 'Where have you been all this time?' },
            { id: '4', message: 'I just arrived from Miami!' },
        ],
    },
    profilePage: {
        posts: [
            { id: '1', message: "Hi, what's up?", likeCount: 15 },
            { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
            { id: '3', message: 'Perfect!', likeCount: 8 },
        ],
    },
}

export let addPost = (postMessage: string) => {
    let newPost = { id: '4', message: postMessage, likeCount: 0 }
    applicationState.profilePage.posts.push(newPost)
    rerenderEntireTree(applicationState)
}
