import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { getUserProfile, ProfileType } from '../../redux/profilePageReducer'
import { Redirect, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24010'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} />
            </>
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type WithRouterPropsType = RouteComponentProps<PathParamsType> &
    ProfileContainerPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(
    WithUrlDataContainerComponent
)
