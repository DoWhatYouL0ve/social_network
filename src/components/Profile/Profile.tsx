import React from 'react'
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ProfilePagePostsType } from '../../redux/state'

type ProfileStatePropsType = {
    state: ProfilePagePostsType
    addPost: (postMessage: string) => void
}

export const Profile = (props: ProfileStatePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost} />
        </div>
    )
}
