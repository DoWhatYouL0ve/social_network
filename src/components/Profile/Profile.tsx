import React from 'react'
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import {
    ProfilePageActionType,
    ProfilePagePostsType,
} from '../../redux/profilePageReducer'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { Store } from 'redux'

type ProfileStatePropsType = {
    store: Store
}

export const Profile = (props: ProfileStatePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
