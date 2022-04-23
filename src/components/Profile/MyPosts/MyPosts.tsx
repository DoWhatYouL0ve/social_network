import React from 'react'
import style from './MyPosts.module.css'
import { Post, PostType } from './Post/Post'

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
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
        if (props.newPostText.trim() !== '') {
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={style.myPostWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        cols={40}
                        rows={5}
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    )
}
