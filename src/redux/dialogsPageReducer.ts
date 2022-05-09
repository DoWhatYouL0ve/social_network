export type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageText: string
}
export type DialogsArrayDataType = {
    id: string
    name: string
}
export type DialogsDataType = Array<DialogsArrayDataType>
export type MessagesArrayDataType = {
    id: string
    message: string
}
export type MessagesDataType = Array<MessagesArrayDataType>
export type DialogsPageActionType =
    | ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof sendMessageAC>

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState: DialogsPageType = {
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
}

export const dialogsPageReducer = (
    state: DialogsPageType = initialState,
    action: DialogsPageActionType
) => {
    let newMessage = {
        id: '5',
        message: state.newMessageText,
    }
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const newMessageTextAC = (newText: string) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText } as const)
export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)
