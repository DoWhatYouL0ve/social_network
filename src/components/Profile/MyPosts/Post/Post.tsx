import React from 'react'
import style from './Post.module.css'
import ava from './../../../images/ava.jpg'

export type PostType = {
    id: string
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={style.post}>
                <img src={ava} alt="" />
                {props.message}
                <div>
                    <span>Likes {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
