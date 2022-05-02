import React from 'react'
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ActionType, ProfilePagePostsType } from '../../redux/state'

type ProfileStatePropsType = {
    state: ProfilePagePostsType
    dispatch: (action: ActionType) => void
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
