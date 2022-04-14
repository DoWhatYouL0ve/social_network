import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    const postData = [
        { id: '1', message: "Hi, what's up?", likeCount: 15 },
        { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
        { id: '3', message: 'Perfect!', likeCount: 8 },
    ]

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
                {postData.map((p) => (
                    <Post
                        key={p.id}
                        id={p.id}
                        message={p.message}
                        likeCount={p.likeCount}
                    />
                ))}
            </div>
        </div>
    )
}
