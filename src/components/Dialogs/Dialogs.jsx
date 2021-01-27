import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state"

export const Dialogs = (props) => {

    /** users list **/
    // вывод списка пользователей в диалоге
    let usersElements = props.state.users.map(
        user => (<DialogItem name={user.name} id={user.id} key={user.id}/>)
    );

    /** messages list **/
    // вывод сообщений в переписке
    let messagesElements = props.state.messages.map(
        message => (<Message incoming={message.incoming} message={message.message} key={message.id}/>)
    );

    /** button click handler **/
    let newMessageRef = React.createRef(); // ссылка на текстэреа
    let buttonClickCallback = () => { // обработчик отправки сообщения
        props.dispatch(sendMessageActionCreator());
        newMessageRef.current.focus();
    }

    let textareaOnChangeHandler = () => {
        let newMessage = newMessageRef.current.value; // текущее значение из текстэреа
        let action = updateNewMessageActionCreator(newMessage);
        props.dispatch(action); // диспатч по типу экшена
    }

    let textareaOnKeyDownHandler = (e) => {
        if ((e.ctrlKey) && ((e.keyCode === 10) || (e.keyCode === 13))) {
            buttonClickCallback();
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {usersElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.messageForm}>
                    <textarea
                        placeholder="Enter your message..."
                        ref={newMessageRef}
                        onChange={textareaOnChangeHandler} value={props.state.newMessageText}
                        onKeyDown={(e) => textareaOnKeyDownHandler(e)}/>
                    <button onClick={buttonClickCallback}>💬 Send</button>
                </div>
            </div>
        </div>
    )
}
