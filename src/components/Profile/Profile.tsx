import React from 'react'
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import {
    ProfilePageActionType,
    ProfilePagePostsType,
} from '../../redux/profilePageReducer'

type ProfileStatePropsType = {
    state: ProfilePagePostsType
    dispatch: (action: ProfilePageActionType) => void
}

export const Profile = (props: ProfileStatePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}
