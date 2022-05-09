import React from 'react'
import { newMessageTextAC, sendMessageAC } from '../../redux/dialogsPageReducer'
import { Dialogs } from './Dialogs'
import { StoreContext } from '../../StoreContext'

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onMessageTextChanged = (text: string) => {
                    store.dispatch(newMessageTextAC(text))
                }

                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                return (
                    <Dialogs
                        dialogsPage={state}
                        onMessageTextChanged={onMessageTextChanged}
                        sendMessage={sendMessage}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}
