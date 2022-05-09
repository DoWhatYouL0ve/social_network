import React from 'react'
import { PostType } from './Post/Post'
import {
    addPostAC,
    ProfilePageActionType,
    updateNewPostTextAC,
} from '../../../redux/profilePageReducer'
import { MyPosts } from './MyPosts'
import { Store } from 'redux'

type MyPostsContainerPropsType = {
    store: Store
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()

    let addNewPost = () => {
        if (state.profilePage.newPostText.trim() !== '') {
            props.store.dispatch(addPostAC())
        }
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <>
            <MyPosts
                updateNewPostText={onPostChange}
                addPost={addNewPost}
                newPostText={state.profilePage.newPostText}
                posts={state.profilePage.posts}
            />
        </>
    )
}
