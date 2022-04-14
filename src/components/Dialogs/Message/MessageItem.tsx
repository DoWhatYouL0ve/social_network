import style from '../Dialogs.module.css'
import React from 'react'

type MessageItemPropsType = {
    id: string
    message: string
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}
