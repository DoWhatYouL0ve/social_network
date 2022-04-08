import React from 'react'
import style from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={style.post}>
                <img
                    src="https://cdn.xxl.thumbs.canstockphoto.ru/face-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-avatar-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-portrait-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82_csp91107259.jpg"
                    alt=""
                />
                {props.message}
                <div>
                    <span>Likes {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
