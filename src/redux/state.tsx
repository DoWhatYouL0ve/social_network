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
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
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
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: '4',
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND_MESSAGE') {
            let newMessage = {
                id: '5',
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
    },
}

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostTextAC = (newText: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
export const newMessageTextAC = (newText: string) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText } as const)
export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)
