import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
