import React from 'react'
import { StateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    unfollow,
    UsersPageType,
    UserType,
} from '../../redux/usersReducer'
import { Users } from './Users'
import { PreLoader } from '../common/PreLoader'
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component<UsersAPIContainerPropsType> {
    constructor(props: UsersAPIContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onSetCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(data.items)
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
                    toggleFollowingInProgress={
                        this.props.toggleFollowingInProgress
                    }
                    followingInProgress={this.props.followingInProgress}
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
    followingInProgress: Array<string>
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (inProgress: boolean, userId: string) => void
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
        followingInProgress: state.usersPage.followingInProgress,
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
    toggleFollowingInProgress,
})(UsersContainer)
