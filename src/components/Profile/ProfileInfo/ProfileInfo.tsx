import React from 'react'
import style from './ProfileInfo.module.css'
import beach from '../../../images/beach.jpg'
import { ProfileType } from '../../../redux/profilePageReducer'
import { PreLoader } from '../../common/PreLoader'

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <PreLoader />
    }
    return (
        <div>
            <div className={style.profileInfoBackground}>
                <img src={beach} alt="" />
            </div>
            <div className={style.avaDescriptionWrapper}>
                <img src={props.profile.photos.small} alt={'no picture'} />
                description
            </div>
        </div>
    )
}
