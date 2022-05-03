import React, { ChangeEvent } from 'react'
import style from './Dialogs.module.css'
import { DialogItem } from './Dialog/DialogItem'
import { MessageItem } from './Message/MessageItem'
import {
    ActionType,
    DialogsPageType,
    newMessageTextAC,
    sendMessageAC,
} from '../../redux/state'

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = props.state.messages.map((m) => (
        <MessageItem key={m.id} message={m.message} id={m.id} />
    ))

    let newMessageText = props.state.newMessageText

    const onMessageTextChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value) {
            let text = e.target.value
            props.dispatch(newMessageTextAC(text))
        }
    }

    const sendMessage = () => {
        if (props.state.newMessageText.trim() !== '') {
            props.dispatch(sendMessageAC())
        }
    }

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        value={newMessageText}
                        onChange={onMessageTextChanged}
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
