import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { ProfileType, setUserProfile } from '../../redux/profilePageReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24010'
        }
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/` + userId
            )
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile} />
            </>
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type WithRouterPropsType = RouteComponentProps<PathParamsType> &
    ProfileContainerPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
    WithUrlDataContainerComponent
)
