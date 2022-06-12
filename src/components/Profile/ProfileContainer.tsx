import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { ProfileType, setUserProfile } from '../../redux/profilePageReducer'

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/24402`)
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

type MapStateToPropsType = {
    profile: ProfileType | null
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
