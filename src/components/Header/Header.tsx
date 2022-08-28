import React from 'react'
import style from './Header.module.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.loginContainer}>
                {props.isAuth ? (
                    <div>
                        {props.login} -{' '}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    )
}
