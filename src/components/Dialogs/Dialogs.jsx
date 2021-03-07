import React from "react";
import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = ({
  messagesPage,
  sendMessage,
  messageOnChangeHandler,
}) => {
  /** users list **/
  let usersElements = messagesPage.users.map((user) => (
    <DialogItem name={user.name} id={user.id} key={user.id} />
  ));

  /** messages list **/
  let messagesElements = messagesPage.messages.map((message) => (
    <Message
      incoming={message.incoming}
      message={message.message}
      key={message.id}
    />
  ));

  /** button click handler **/
  let newMessageRef = React.createRef();
  let buttonClickCallback = () => {
    sendMessage();
    newMessageRef.current.focus();
  };

  let textareaOnChangeHandler = () => {
    let newMessage = newMessageRef.current.value;
    messageOnChangeHandler(newMessage);
  };

  let textareaOnKeyDownHandler = (e) => {
    if (e.ctrlKey && (e.keyCode === 10 || e.keyCode === 13)) {
      sendMessage();
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
            value={messagesPage.newMessageText}
            onKeyDown={(e) => textareaOnKeyDownHandler(e)}
          />
          <button onClick={buttonClickCallback}>💬 Send</button>
        </div>
      </div>
    </div>
  );
};
