import React from 'react'
import { connect } from 'react-redux'
import { FormDataType, LoginReduxForm } from './LoginForm'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import { StateType } from '../../redux/redux-store'

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.capture
        )
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <>
            <h1>Login</h1>
            {/*//@ts-ignore*/}
            <LoginReduxForm onSubmit={onSubmit} capture={props.capture} />
        </>
    )
}
type MapDispatchToPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        capture: string
    ) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    capture: string | null
}
const mapToStateToProps = (state: StateType): MapStateToPropsType => {
    return { isAuth: state.auth.isAuth, capture: state.auth.capture }
}

export const LoginContainer = connect(mapToStateToProps, { login })(Login)
