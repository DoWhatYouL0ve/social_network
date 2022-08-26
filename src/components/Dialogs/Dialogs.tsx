import React from 'react'
import style from './Dialogs.module.css'
import { DialogItem } from './Dialog/DialogItem'
import { MessageItem } from './Message/MessageItem'
import { DialogsPropsType } from './DialogsContainer'
import {
    AddMessageFormReduxForm,
    DialogsMessageFormDataType,
} from './DialogsForm/AddMessageForm'

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = props.dialogsPage.messages.map((m) => (
        <MessageItem key={m.id} message={m.message} id={m.id} />
    ))

    const addNewMessage = (values: DialogsMessageFormDataType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}
