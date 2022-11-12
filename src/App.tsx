import React, { Suspense } from 'react'
import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { LoginContainer } from './components/Login/Login'
import { connect } from 'react-redux'
import { setInitializedTC } from './redux/app-reducer'
import { StateType } from './redux/redux-store'
import { PreLoader } from './components/common/PreLoader'
import { compose } from 'redux'

const UsersContainer = React.lazy(() =>
    import('./components/Users/UsersContainer').then(
        ({ default: UsersContainer }) => ({
            default: UsersContainer,
        })
    )
)

const ProfileContainer = React.lazy(() =>
    import('./components/Profile/ProfileContainer').then(
        ({ default: ProfileContainer }) => ({
            default: ProfileContainer,
        })
    )
)

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
                        path={'/'}
                        render={() => <Redirect to={'/profile'} />}
                    />
                    <Route
                        path={'/profile/:userId?'}
                        render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainer />
                            </Suspense>
                        )}
                    />
                    <Route
                        path={'/dialogs'}
                        render={() => <DialogsContainer />}
                    />
                    <Route
                        path={'/users'}
                        render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                <UsersContainer />
                            </Suspense>
                        )}
                    />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/music'} render={() => <Music />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                    <Route path={'/login'} render={() => <LoginContainer />} />
                    <Route
                        path={'/*'}
                        render={() => <div>404 Page not found</div>}
                    />
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
