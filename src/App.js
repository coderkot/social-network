import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Nav } from './components/Navbar/Nav';
import { Profile } from './components/Profile/Profile';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';
import { MessagesContainer } from './components/Messages/MessagesContainer';
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />

        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
