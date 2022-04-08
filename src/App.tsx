import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Nav/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="appWrapperContent">
                <Profile />
                {/*<Dialogs />*/}
            </div>
        </div>
    )
}

export default App
