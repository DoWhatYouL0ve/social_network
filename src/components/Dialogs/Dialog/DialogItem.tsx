import style from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
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
