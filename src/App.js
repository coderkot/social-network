import React from "react"
import "./App.css"
import {BrowserRouter, Route} from "react-router-dom"
import {Header} from "./components/Header/Header"
import {Nav} from "./components/Navbar/Nav"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs"
import {Music} from "./components/Music/Music"
import {News} from "./components/News/News"
import {Settings} from "./components/Settings/Settings"


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ // Роуты для организации переходов
                        () => <Profile
                            profilePage={props.state.profilePage} // список постов
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path="/dialogs" render={
                        () => <Dialogs state={props.state.messagesPage}/> // список диалогов\сообщений\пользователей
                    }/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
