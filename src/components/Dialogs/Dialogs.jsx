import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"

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
        let value = newMessageRef.current.value; // текущее значение текстэреа
        alert(value);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {usersElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.messageForm}>
                    <textarea placeholder="Enter your message..." ref={newMessageRef} />
                    <button onClick={buttonClickCallback}>💬 Send</button>
                </div>
            </div>
        </div>
    )
}
