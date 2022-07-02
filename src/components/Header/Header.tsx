import React from 'react'
import style from './Header.module.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.loginContainer}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    )
}
