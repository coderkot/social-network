import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Navbar/Nav";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Music } from "./components/Music/Music";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile store={props.store} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
