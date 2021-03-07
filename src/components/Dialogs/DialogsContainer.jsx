import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sandMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let messageOnChangeHandler = (newMessage) => {
    let action = updateNewMessageActionCreator(newMessage);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      sendMessage={sandMessage}
      messageOnChangeHandler={messageOnChangeHandler}
      users={state.messagesPage.users}
      messages={state.messagesPage.messages}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};
