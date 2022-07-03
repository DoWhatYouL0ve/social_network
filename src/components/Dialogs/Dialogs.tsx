import React, { ChangeEvent } from 'react'
import style from './Dialogs.module.css'
import { DialogItem } from './Dialog/DialogItem'
import { MessageItem } from './Message/MessageItem'
import { DialogsPropsType } from './DialogsContainer'
import { Redirect } from 'react-router-dom'

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = props.dialogsPage.messages.map((m) => (
        <MessageItem key={m.id} message={m.message} id={m.id} />
    ))

    let newMessageText = props.dialogsPage.newMessageText

    const onMessageTextChangedHandler = (
        e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        if (e.target.value) {
            let text = e.target.value
            props.onMessageTextChanged(text)
        }
    }

    const sendMessage = () => {
        if (props.dialogsPage.newMessageText.trim() !== '') {
            props.sendMessage()
        }
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        value={newMessageText}
                        onChange={onMessageTextChangedHandler}
                        cols={30}
                        rows={5}
                    ></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
