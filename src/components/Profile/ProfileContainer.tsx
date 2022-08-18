import React from 'react'
import { Profile } from './Profile'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { getUserProfile, ProfileType } from '../../redux/profilePageReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component<WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24010'
        }
        this.props.getUserProfile(userId)
    }

    render() {
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
    }
}

/*let WithUrlDataContainerComponent = withRouter(ProfileContainer)*/

/*export default withAuthRedirect(
    connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
)*/

// compose import from redux
export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile }),
    withRouter
    //withAuthRedirect
)(ProfileContainer)
