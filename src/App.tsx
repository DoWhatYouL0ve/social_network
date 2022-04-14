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
import { DialogsDataType, MessagesDataType, PostType } from './index'

type AppPropsType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    posts: Array<PostType>
}

const App = (props: AppPropsType) => {
    return (
        // BrowserRouter - for all links to work properly
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="appWrapperContent">
                    <Route
                        path={'/profile'}
                        render={() => <Profile posts={props.posts} />}
                    />
                    <Route
                        path={'/dialogs'}
                        render={() => (
                            <Dialogs
                                dialogs={props.dialogs}
                                messages={props.messages}
                            />
                        )}
                    />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/music'} render={() => <Music />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
