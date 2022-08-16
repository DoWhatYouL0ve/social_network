import React from 'react'
import { StateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import {
    follow,
    followTC,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    unfollowTC,
    UsersPageType,
} from '../../redux/usersReducer'
import { Users } from './Users'
import { PreLoader } from '../common/PreLoader'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'

class UsersContainer extends React.Component<UsersAPIContainerPropsType> {
    constructor(props: UsersAPIContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
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
                    follow={this.props.follow}
                    setCurrentPage={this.onSetCurrentPage}
                    unfollow={this.props.unfollow}
                    toggleFollowingInProgress={
                        this.props.toggleFollowingInProgress
                    }
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
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
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (inProgress: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
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

export default withAuthRedirect(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers,
        unfollowTC,
        followTC,
    })(UsersContainer)
)
