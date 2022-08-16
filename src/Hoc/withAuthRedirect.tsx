import React, { ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { StateType } from '../redux/redux-store'

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
//generic ComponentType works properly only with function expression
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let { isAuth, ...restProps } = props
        if (!isAuth) return <Redirect to={'/login'} />
        return <Component {...(restProps as T)} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}
