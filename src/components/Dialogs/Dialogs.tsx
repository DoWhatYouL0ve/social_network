import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

type DialogPropsType = {
    name: string
    id: string
}

const Dialog = (props: DialogPropsType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div>
            <div className={style.dialog}>
                <NavLink to={path} activeClassName={style.active}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}

type MessagePropsType = {
    id: string
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

type DialogsDataType = Array<{ id: string; name: string }>
type MessagesArrayDataType = {
    id: string
    message: string
}
type MessagesDataType = Array<MessagesArrayDataType>
type DialogsPropsType = DialogsDataType & MessagesDataType

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs: DialogsDataType = [
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
    ]

    let dialogsElements = dialogs.map((d) => (
        <Dialog key={d.id} name={d.name} id={d.id} />
    ))

    let messagesElements = messages.map((m) => (
        <Message key={m.id} message={m.message} id={m.id} />
    ))

    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>{dialogsElements}</div>
            <div className={style.messagesSection}>{messagesElements}</div>
        </div>
    )
}
