import React from 'react'
import style from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://www.lovehappensmag.com/blog/wp-content/uploads/2016/06/Most-beautiful-beaches-slider-1.jpg"
                    alt=""
                />
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className="posts">
                    <div className="post">post 1</div>
                    <div className="post">post 2</div>
                    <div className="post">post 3</div>
                </div>
            </div>
        </div>
    )
}
