import React from 'react'
import style from './ProfileInfo.module.css'
import beach from './../../images/beach.jpg'

export const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileInfoBackground}>
                <img src={beach} alt="" />
            </div>
            <div className={style.avaDescriptionWrapper}>ava + description</div>
        </div>
    )
}
