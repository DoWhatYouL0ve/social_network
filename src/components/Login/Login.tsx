import React from 'react'
import { FormDataType, LoginReduxForm } from './LoginForm'

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {}

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}
