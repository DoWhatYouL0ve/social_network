import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import { MyPostsPropsType } from './MyPostsContainer'
import {
    AddMyPostsFormPropsType,
    AddMyPostsFormReduxForm,
} from './MyPostsForm/AddMyPostsForm'

export const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => (
        <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}
        />
    ))

    const addNewPost = (values: AddMyPostsFormPropsType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.myPostWrapper}>
            <h3>My posts</h3>
            <div>
                <AddMyPostsFormReduxForm onSubmit={addNewPost} />
            </div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    )
})
