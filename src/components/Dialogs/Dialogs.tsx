import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogsPageWrapper}>
            <div className={style.dialogsSection}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">William</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Rita</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Leo</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Mia</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/5">Monika</NavLink>
                </div>
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
