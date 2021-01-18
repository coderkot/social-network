import React from "react"
import style from "./Posts.module.css"
import {PostItem} from "./PostItem"
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state"

export const Posts = (props) => {

    /** posts list **/
    // вывод списка сообщений на стене
    let postsElements = props.posts.map(
        post => (<PostItem text={post.message} likes={post.likes} key={post.id}/>)
    ).reverse();

    /** button click handler **/
    // обработчик нажатия кнопки добавления сообщения на стену
    let buttonOnClickCallback = () => {
        props.dispatch(addPostActionCreator()); // диспатч по типу экшена
    };

    let newPostRef = React.createRef(); // ссылка на текстэреа
    let textareaOnChangeHandler = () => {
        let postMessage = newPostRef.current.value; // текущее значение из текстэреа
        let action = updateNewPostActionCreator(postMessage);
        props.dispatch(action); // диспатч по типу экшена
    }

    return (
        <div className={style.postsBlock}>
            <h3>posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder="What's new?"
                        ref={newPostRef}
                        value={props.newPostText}
                        onChange={textareaOnChangeHandler}
                    />
                </div>
                <div style={{minHeight: "40px", overflow: "hidden"}}>
                    <button
                        className={style.addPostBtn}
                        onClick={buttonOnClickCallback}
                    >
                        💬 Add post
                    </button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}
