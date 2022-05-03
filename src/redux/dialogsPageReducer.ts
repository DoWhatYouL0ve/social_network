import { ActionType, DialogsPageType } from './state'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsPageReducer = (
    state: DialogsPageType,
    action: ActionType
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
