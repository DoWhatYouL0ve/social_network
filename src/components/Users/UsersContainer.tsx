import React from 'react'
import { StateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersPageType,
    UserType,
} from '../../redux/usersReducer'

import axios from 'axios'
import { Users } from './Users'
import { PreLoader } from '../common/PreLoader'

class UsersContainer extends React.Component<UsersAPIContainerPropsType> {
    constructor(props: UsersAPIContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onSetCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setToggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreLoader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    follow={this.props.follow}
                    setCurrentPage={this.onSetCurrentPage}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

type MapStateToPropsType = {
    users: UsersPageType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

export type UsersAPIContainerPropsType = MapStateToPropsType &
    MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

//example of mapDispatchToProps
/*
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
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        },
    }
}
*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
})(UsersContainer)
