import React, { ChangeEvent, useEffect, useState } from 'react'
import style from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.profileStatusWrapper}>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || 'no status'}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        type="text"
                        value={status}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        onChange={onStatusChange}
                    />
                </div>
            )}
        </div>
    )
}
