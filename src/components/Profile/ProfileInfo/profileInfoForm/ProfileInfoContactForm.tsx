import React from 'react'
import style from './form.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    ProfileType,
    setUserProfileData,
} from '../../../../redux/profilePageReducer'
import { useDispatch } from 'react-redux'

type ProfileInfoContactFormType = {
    deactivateEditMode: () => void
    profile: ProfileType
}

export const ProfileInfoContactForm = (props: ProfileInfoContactFormType) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        //we have created our initialValues object in a format EmailJS accepts
        initialValues: {
            user_name: props.profile.fullName, //user name
            skills: props.profile.lookingForAJobDescription || '', //skills
            lookingForAJob: false,
            contacts: props.profile.contacts,
        },
        validationSchema: Yup.object({
            user_name: Yup.string().required('* Name field is required'),
        }),
        onSubmit: (values) => {
            console.log('values', values)
            dispatch(
                //@ts-ignore
                setUserProfileData({
                    userId: props.profile.userId,
                    fullName: values.user_name,
                    lookingForAJob: values.lookingForAJob,
                    lookingForAJobDescription: values.skills,
                    contacts: values.contacts,
                    photos: props.profile.photos,
                    AboutMe: 'some information',
                })
            )
            props.deactivateEditMode()
        },
    })
    return (
        <form className={style.accountInfoForm} onSubmit={formik.handleSubmit}>
            <div className={style.fullName}>Full name:</div>
            <label htmlFor="user_name" />
            <input
                id="user_name"
                name="user_name"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.user_name}
            />
            <div
                className={`expandable ${
                    formik.touched.user_name && formik.errors.user_name
                        ? 'show'
                        : ''
                }`}
            >
                {formik.errors.user_name}
            </div>
            <div className={style.lookingForAJob}>
                <b>Looking for a job:</b>{' '}
                <input
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type={'checkbox'}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <b>My professional skills:</b>{' '}
                <textarea
                    id="skills"
                    name="skills"
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <b>Contacts:</b>{' '}
                {Object.keys(props.profile.contacts).map((key) => (
                    <div key={key}>
                        <b>
                            {key}:{' '}
                            <input
                                type="text"
                                id={'contact.' + key}
                                name={'contacts.' + key}
                                onChange={formik.handleChange}
                            />
                        </b>
                    </div>
                ))}
            </div>
            <button type="submit">Save</button>
        </form>
    )
}
