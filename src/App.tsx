import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Nav/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { Store } from 'redux'

type AppPropsType = {
    store: Store
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="appWrapperContent">
                <Route
                    path={'/profile'}
                    render={() => (
                        <Profile
                            state={state.profilePage}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />
                    )}
                />
                <Route
                    path={'/dialogs'}
                    render={() => (
                        <Dialogs
                            state={state.dialogsPage}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />
                    )}
                />
                <Route path={'/news'} render={() => <News />} />
                <Route path={'/music'} render={() => <Music />} />
                <Route path={'/settings'} render={() => <Settings />} />
            </div>
        </div>
    )
}

export default App
