import React from 'react'
import {
    addPostAC,
    ProfilePagePostsType,
    updateNewPostTextAC,
} from '../../../redux/profilePageReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { StateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStateToPropsType = ProfilePagePostsType
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts)
