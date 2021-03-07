import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = (props) => {
  // let state = props.store.getState();
  //
  // let sandMessage = () => {
  //   props.store.dispatch(sendMessageActionCreator());
  // };
  //
  // let messageOnChangeHandler = (newMessage) => {
  //   let action = updateNewMessageActionCreator(newMessage);
  //   props.store.dispatch(action);
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let sandMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let messageOnChangeHandler = (newMessage) => {
          let action = updateNewMessageActionCreator(newMessage);
          store.dispatch(action);
        };

        return (
          <Dialogs
            sendMessage={sandMessage}
            messageOnChangeHandler={messageOnChangeHandler}
            state={state.messagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
