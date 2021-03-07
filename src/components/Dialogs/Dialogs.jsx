import React from "react";
import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = (props) => {
  let state = props.state;
  /** users list **/
  let usersElements = state.users.map((user) => (
    <DialogItem name={user.name} id={user.id} key={user.id} />
  ));

  /** messages list **/
  let messagesElements = state.messages.map((message) => (
    <Message
      incoming={message.incoming}
      message={message.message}
      key={message.id}
    />
  ));

  /** button click handler **/
  let newMessageRef = React.createRef();
  let buttonClickCallback = () => {
    props.sendMessage();
    newMessageRef.current.focus();
  };

  let textareaOnChangeHandler = () => {
    let newMessage = newMessageRef.current.value;
    props.messageOnChangeHandler(newMessage);
  };

  let textareaOnKeyDownHandler = (e) => {
    if (e.ctrlKey && (e.keyCode === 10 || e.keyCode === 13)) {
      props.sendMessage();
      newMessageRef.current.focus();
    }
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{usersElements}</div>
      <div className={style.messages}>
        {messagesElements}
        <div className={style.messageForm}>
          <textarea
            placeholder="Enter your message..."
            ref={newMessageRef}
            onChange={textareaOnChangeHandler}
            value={state.newMessageText}
            onKeyDown={(e) => textareaOnKeyDownHandler(e)}
          />
          <button onClick={buttonClickCallback}>💬 Send</button>
        </div>
      </div>
    </div>
  );
};
