import React from 'react'
import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Route, withRouter } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { LoginContainer } from './components/Login/Login'
import { connect } from 'react-redux'
import { setInitializedTC } from './redux/app-reducer'
import { StateType } from './redux/redux-store'
import { PreLoader } from './components/common/PreLoader'
import { compose } from 'redux'

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.setInitializedTC()
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader />
        }
        return (
            <div className="App">
                <HeaderContainer />
                <Navbar />
                <div className="appWrapperContent">
                    <Route
                        path={'/profile/:userId?'}
                        render={() => <ProfileContainer />}
                    />
                    <Route
                        path={'/dialogs'}
                        render={() => <DialogsContainer />}
                    />
                    <Route path={'/users'} render={() => <UsersContainer />} />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/music'} render={() => <Music />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                    <Route path={'/login'} render={() => <LoginContainer />} />
                </div>
            </div>
        )
    }
}
type MapDispatchToPropsType = {
    setInitializedTC: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

const MapStateToProps = (state: StateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
})

type AppType = MapDispatchToPropsType & MapStateToPropsType

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(
        MapStateToProps,
        { setInitializedTC }
    )
)(App)
