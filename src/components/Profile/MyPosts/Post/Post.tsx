import React from 'react'
import style from './Post.module.css'
import ava from '../../../../images/ava.jpg'

export type PostType = {
    id: string
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={style.post}>
                <div>
                    <img src={ava} alt="" />
                </div>
                <div className={style.profileMessage}>{props.message}</div>
                <div className={style.likes}>Likes: {props.likeCount}</div>
            </div>
        </div>
    )
}
