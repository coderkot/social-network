import React from "react";
import style from "./Posts.module.css";
import { PostItem } from "./PostItem";

export const Posts = (props) => {
  /** posts list **/
  let postsElements = props.posts
    .map((post) => (
      <PostItem text={post.message} likes={post.likes} key={post.id} />
    ))
    .reverse();

  /** button click handler **/
  let buttonOnClickCallback = () => {
    props.addPost();
  };

  let newPostRef = React.createRef();
  let textareaOnChangeHandler = () => {
    let postMessage = newPostRef.current.value;
    props.updatePostText(postMessage);
  };

  let textareaOnKeyDownHandler = (e) => {
    if (e.ctrlKey && (e.keyCode === 10 || e.keyCode === 13)) {
      props.addPost();
    }
  };

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
            onKeyDown={(e) => textareaOnKeyDownHandler(e)}
          />
        </div>
        <div style={{ minHeight: "40px", overflow: "hidden" }}>
          <button className={style.addPostBtn} onClick={buttonOnClickCallback}>
            💬 Add post
          </button>
        </div>
      </div>

      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
