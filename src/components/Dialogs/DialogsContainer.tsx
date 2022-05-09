import React from 'react'
import { newMessageTextAC, sendMessageAC } from '../../redux/dialogsPageReducer'
import { Store } from 'redux'
import { Dialogs } from './Dialogs'

type DialogsContainerPropsType = {
    store: Store
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().dialogsPage

    const onMessageTextChanged = (text: string) => {
        props.store.dispatch(newMessageTextAC(text))
    }

    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <Dialogs
            dialogsPage={state}
            onMessageTextChanged={onMessageTextChanged}
            sendMessage={sendMessage}
        />
    )
}
