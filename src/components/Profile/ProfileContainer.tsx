import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import {
    getUserProfile,
    ProfileType,
    getUserStatus,
    updateUserStatus,
} from '../../redux/profilePageReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { compose } from 'redux'

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId: any = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </>
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    id: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type WithRouterPropsType = RouteComponentProps<PathParamsType> &
    ProfileContainerPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

// compose import from redux
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withRouter
)(ProfileContainer)
