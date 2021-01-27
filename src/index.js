import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom"

export const rerenderEntireTree = (state) => { // entry point
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)} /* dispatch methods by action.type */
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState()); // render by load
store.subscribe(rerenderEntireTree); // rerender when state changed
// TODO: 42 - React JS Практика - Redux
