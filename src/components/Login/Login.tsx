import React from 'react'
import { connect } from 'react-redux'
import { FormDataType, LoginReduxForm } from './LoginForm'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import { StateType } from '../../redux/redux-store'

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile/:userId?'} />
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}
const mapToStateToProps = (state: StateType): MapStateToPropsType => {
    return { isAuth: state.auth.isAuth }
}

export const LoginContainer = connect(mapToStateToProps, { login })(Login)
