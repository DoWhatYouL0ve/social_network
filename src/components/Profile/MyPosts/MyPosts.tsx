import React from 'react'
import style from './MyPosts.module.css'
import { Post, PostType } from './Post/Post'

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => (
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}
        />
    ))

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
        if (newPostElement.current?.value !== undefined) {
            let text = newPostElement.current?.value
            props.addPost(text)
        }
    }

    return (
        <div className={style.myPostWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        name=""
                        id=""
                        cols={40}
                        rows={5}
                        ref={newPostElement}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    )
}
