import React from 'react'
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://image.shutterstock.com/image-vector/earth-globe-icon-trendy-logo-260nw-1257541729.jpg"
                alt="logo"
            />
        </header>
    )
}
