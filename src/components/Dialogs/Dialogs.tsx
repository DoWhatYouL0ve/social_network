import React from 'react'
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>
                <div className={`${style.dialog} ${style.activeD}`}>
                    William
                </div>
                <div className={style.dialog}>Rita</div>
                <div className={style.dialog}>Leo</div>
                <div className={style.dialog}>Mia</div>
                <div className={style.dialog}>Monika</div>
            </div>
            <div className={style.messagesSection}>
                <div className={style.message}>Hi, check it out!</div>
                <div className={style.message}>Wow, nice to see you...</div>
                <div className={style.message}>
                    Where have you been all this time?
                </div>
                <div className={style.message}>I just arrived from Miami!</div>
            </div>
        </div>
    )
}
