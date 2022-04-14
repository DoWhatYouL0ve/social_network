import React from 'react'
import style from './Dialogs.module.css'
import { DialogItem } from './Dialog/DialogItem'
import { MessageItem } from './Message/MessageItem'
import { DialogsPageType } from '../../redux/state'

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = props.state.messages.map((m) => (
        <MessageItem key={m.id} message={m.message} id={m.id} />
    ))

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>{messagesElements}</div>
        </div>
    )
}
