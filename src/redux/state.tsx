import {
    addPostAC,
    profilePageReducer,
    updateNewPostTextAC,
} from './profilePageReducer'
import {
    dialogsPageReducer,
    newMessageTextAC,
    sendMessageAC,
} from './dialogsPageReducer'

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
    newMessageText: string
}
export type ProfilePagePostsType = {
    posts: Array<PostType>
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePagePostsType
}
//action types, due to that always add 'as const' in the AC functions, examples below
export type ActionType =
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof sendMessageAC>

export type StorePropsType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export let store: StorePropsType = {
    _state: {
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
            newMessageText: '',
        },
        profilePage: {
            posts: [
                { id: '1', message: "Hi, what's up?", likeCount: 15 },
                { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
                { id: '3', message: 'Perfect!', likeCount: 8 },
            ],
            newPostText: '',
        },
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(
            this._state.profilePage,
            action
        )
        this._state.dialogsPage = dialogsPageReducer(
            this._state.dialogsPage,
            action
        )
        this._callSubscriber(this._state)
    },
}
