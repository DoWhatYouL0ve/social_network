import React from 'react'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <img
                    src="https://image.shutterstock.com/image-vector/earth-globe-icon-trendy-logo-260nw-1257541729.jpg"
                    alt="logo"
                />
            </header>
            <nav className="nav">
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://www.lovehappensmag.com/blog/wp-content/uploads/2016/06/Most-beautiful-beaches-slider-1.jpg"
                        alt=""
                    />
                </div>
                <div>ava + description</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    )
}

export default App
