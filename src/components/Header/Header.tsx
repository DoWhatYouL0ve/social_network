import React from 'react'
import style from './Header.module.css'
import logo from './../images/logo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}
