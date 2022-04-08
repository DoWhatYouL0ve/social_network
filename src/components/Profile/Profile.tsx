import React from 'react'
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.lovehappensmag.com/blog/wp-content/uploads/2016/06/Most-beautiful-beaches-slider-1.jpg"
                    alt=""
                />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}
