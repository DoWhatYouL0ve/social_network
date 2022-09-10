import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import { StateType } from '../../redux/redux-store'

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props} />
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    logout: () => void
}
type HeaderContainerPropsType = MapStateToProps & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
