import React from 'react'
import {
    addPostAC,
    ProfilePagePostsType,
} from '../../../redux/profilePageReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { StateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStateToPropsType = ProfilePagePostsType
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
    }
}

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts)
