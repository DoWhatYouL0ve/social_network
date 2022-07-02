import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, setAuthUserData } from '../../redux/auth-reducer'
import { StateType } from '../../redux/redux-store'
import { authAPI } from '../../api/api'

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
type HeaderContainerPropsType = MapStateToProps & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
