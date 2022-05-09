import React from 'react'
import {
    addPostAC,
    updateNewPostTextAC,
} from '../../../redux/profilePageReducer'
import { MyPosts } from './MyPosts'
import { Store } from 'redux'
import { StoreContext } from '../../../StoreContext'

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let addNewPost = () => {
                    if (state.profilePage.newPostText.trim() !== '') {
                        store.dispatch(addPostAC())
                    }
                }
                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addNewPost}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}
