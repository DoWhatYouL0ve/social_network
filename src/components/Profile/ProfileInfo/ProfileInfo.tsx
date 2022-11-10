import React, { ChangeEvent } from 'react'
import style from './ProfileInfo.module.css'
import beach from '../../../images/beach.jpg'
import ava from '../../../images/ava.jpg'
import { ProfileType } from '../../../redux/profilePageReducer'
import { PreLoader } from '../../common/PreLoader'
import { ProfileStatus } from './ProfileStatus'
import { AiOutlineCamera } from 'react-icons/ai'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <PreLoader />
    }

    const setAva = (e: ChangeEvent<HTMLInputElement>) => {
        if (e != null && e.target.files) {
            console.log(e.target.files[0])
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={style.profileWrapper}>
            <div className={style.profileInfoBackground}>
                <img src={beach} alt="" />
            </div>
            <div className={style.avaDescriptionWrapper}>
                <img
                    src={
                        props.profile.photos.large
                            ? props.profile.photos.large
                            : ava
                    }
                    alt={'no picture'}
                />
                {props.isOwner && (
                    <div style={{ height: '0' }}>
                        <label
                            htmlFor={'changeAvaInput'}
                            className={style.changeAva}
                        >
                            <AiOutlineCamera />
                        </label>
                        <input
                            id={'changeAvaInput'}
                            type={'file'}
                            onChange={setAva}
                        />
                    </div>
                )}
                <div className={style.fullName}>{props.profile.fullName}</div>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    )
}
