export type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
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
export type DialogsPageActionType = ReturnType<typeof sendMessageAC>

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
}

export const dialogsPageReducer = (
    state: DialogsPageType = initialState,
    action: DialogsPageActionType
): DialogsPageType => {
    let copyState
    switch (action.type) {
        case SEND_MESSAGE:
            return (copyState = {
                ...state,
                messages: [
                    ...state.messages,
                    { id: '5', message: action.newMessageText },
                ],
            })
        default:
            return state
    }
}

export const sendMessageAC = (newMessageText: string) =>
    ({ type: SEND_MESSAGE, newMessageText } as const)
