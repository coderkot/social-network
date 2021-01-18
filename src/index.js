import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state"; // хранилище состояния
import {BrowserRouter} from "react-router-dom"

export const rerenderEntireTree = (state) => { // метод рендера ДОМ компонентов \ входная точка
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)} /* диспатч методов изменения состояний */
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState()); // рендер при загрузке
store.subscribe(rerenderEntireTree); // подписка на рендер при изменении состояния
