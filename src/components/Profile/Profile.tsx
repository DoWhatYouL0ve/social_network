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

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}
