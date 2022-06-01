import React from 'react'
import { StateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Users } from './Users'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType,
} from '../../redux/usersReducer'

type MapStateToPropsType = {
    users: UsersPageType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
