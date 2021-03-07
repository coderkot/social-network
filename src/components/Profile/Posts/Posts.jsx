import React from "react";
import style from "./Posts.module.css";
import { PostItem } from "./PostItem";

export const Posts = ({ posts, addPost, updatePostText, newPostText }) => {
  /** posts list **/
  let postsElements = posts
    .map((post) => (
      <PostItem text={post.message} likes={post.likes} key={post.id} />
    ))
    .reverse();

  /** button click handler **/
  let buttonOnClickCallback = () => {
    addPost();
  };

  let newPostRef = React.createRef();
  let textareaOnChangeHandler = () => {
    let postMessage = newPostRef.current.value;
    updatePostText(postMessage);
  };

  let textareaOnKeyDownHandler = (e) => {
    if (e.ctrlKey && (e.keyCode === 10 || e.keyCode === 13)) {
      addPost();
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
            value={newPostText}
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
