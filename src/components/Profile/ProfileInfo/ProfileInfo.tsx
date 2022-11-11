import React, { ChangeEvent, useState } from 'react'
import style from './ProfileInfo.module.css'
import beach from '../../../images/beach.jpg'
import ava from '../../../images/ava.jpg'
import { ProfileType } from '../../../redux/profilePageReducer'
import { PreLoader } from '../../common/PreLoader'
import { ProfileStatus } from './ProfileStatus'
import { AiOutlineCamera } from 'react-icons/ai'
import { ProfileInfoContactForm } from './profileInfoForm/ProfileInfoContactForm'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    if (!props.profile) {
        return <PreLoader />
    }

    const setAva = (e: ChangeEvent<HTMLInputElement>) => {
        if (e != null && e.target.files) {
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

                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                {editMode ? (
                    <ProfileInfoContactForm
                        deactivateEditMode={() => setEditMode(false)}
                        profile={props.profile}
                    />
                ) : (
                    <ProfileInfoBlock
                        profile={props.profile}
                        owner={props.isOwner}
                        activateEditMode={activateEditMode}
                    />
                )}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contacts = ({ contactTitle, contactValue }: ContactPropsType) => {
    return (
        <div className={style.contactsInfoWrapper}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

type ProfileInfoBlockType = {
    profile: ProfileType
    owner: boolean
    activateEditMode: () => void
}

const ProfileInfoBlock = (props: ProfileInfoBlockType) => {
    return (
        <div className={style.accountInfo}>
            <div className={style.fullName}>{props.profile.fullName}</div>
            <div className={style.lookingForAJob}>
                <b>Looking for a job:</b>{' '}
                {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob && (
                <div className={style.description}>
                    <b>My professional skills:</b>{' '}
                    {props.profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>Contacts:</b>{' '}
                {Object.keys(props.profile.contacts).map((key) => (
                    <Contacts
                        key={key}
                        contactTitle={key}
                        //@ts-ignore
                        contactValue={props.profile?.contacts[key]}
                    />
                ))}
            </div>
            {props.owner && (
                <button onClick={props.activateEditMode}>Edit info</button>
            )}
        </div>
    )
}
