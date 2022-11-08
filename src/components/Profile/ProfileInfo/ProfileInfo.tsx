import React from 'react'
import style from './ProfileInfo.module.css'
import beach from '../../../images/beach.jpg'
import ava from '../../../images/ava.jpg'
import { ProfileType } from '../../../redux/profilePageReducer'
import { PreLoader } from '../../common/PreLoader'
import { ProfileStatus } from './ProfileStatus'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <PreLoader />
    }
    return (
        <div className={style.profileWrapper}>
            <div className={style.profileInfoBackground}>
                <img src={beach} alt="" />
            </div>
            <div className={style.avaDescriptionWrapper}>
                <img
                    src={
                        props.profile.photos.small
                            ? props.profile.photos.small
                            : ava
                    }
                    alt={'no picture'}
                />
                <div className={style.fullName}>{props.profile.fullName}</div>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    )
}
