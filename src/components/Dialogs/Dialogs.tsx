import React from 'react'
import style from './Dialogs.module.css'
import { DialogItem } from './Dialog/DialogItem'
import { MessageItem } from './Message/MessageItem'
import { DialogsDataType, MessagesDataType } from '../../index'

type DialogsPropsType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
}

export const Dialogs = (props: DialogsPropsType) => {
    /*let dialogs: DialogsDataType = [
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
    ]*/

    let dialogsElements = props.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = props.messages.map((m) => (
        <MessageItem key={m.id} message={m.message} id={m.id} />
    ))

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>{messagesElements}</div>
        </div>
    )
}
