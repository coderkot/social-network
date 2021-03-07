import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./StoreContext";

export const rerenderEntireTree = (state) => {
  // entry point
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState()); // render by load
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
}); // rerender when state changed
// TODO: 43
