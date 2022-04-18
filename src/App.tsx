import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Nav/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { StateType } from './redux/state'

type AppPropsType = {
    appState: StateType
    addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="appWrapperContent">
                <Route
                    path={'/profile'}
                    render={() => (
                        <Profile
                            state={props.appState.profilePage}
                            addPost={props.addPost}
                        />
                    )}
                />
                <Route
                    path={'/dialogs'}
                    render={() => (
                        <Dialogs state={props.appState.dialogsPage} />
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
