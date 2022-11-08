import React from 'react'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../redux/profilePageReducer'
import styles from './Profile.module.css'

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    )
}
