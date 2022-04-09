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
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>
                <Dialog name={'William'} id={'1'} />
                <Dialog name={'Rita'} id={'2'} />
                <Dialog name={'Leo'} id={'3'} />
                <Dialog name={'Mia'} id={'4'} />
                <Dialog name={'Monika'} id={'5'} />
            </div>
            <div className={style.messagesSection}>
                <Message message={'Hi, check it out!'} />
                <Message message={'Wow, nice to see you...'} />
                <Message message={'Where have you been all this time?'} />
                <Message message={'I just arrived from Miami!'} />
            </div>
        </div>
    )
}
