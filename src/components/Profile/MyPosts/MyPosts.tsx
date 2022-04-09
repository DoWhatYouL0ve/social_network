import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return (
        <div className={style.myPostWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols={40} rows={5}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Hi, what's up?" likeCount={15} />
                <Post message="Yello, I'm great and you?" likeCount={6} />
                <Post message="Perfect!" likeCount={8} />
            </div>
        </div>
    )
}
