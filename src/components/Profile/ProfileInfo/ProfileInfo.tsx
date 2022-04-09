import React from 'react'
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.lovehappensmag.com/blog/wp-content/uploads/2016/06/Most-beautiful-beaches-slider-1.jpg"
                    alt=""
                />
            </div>
            <div className={style.avaDescriptionWrapper}>ava + description</div>
        </div>
    )
}
