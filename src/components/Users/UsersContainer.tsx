import React from 'react'
import { StateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Users } from './Users'
import {
    followAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType,
} from '../../redux/usersReducer'

type MapStateToPropsType = {
    users: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
