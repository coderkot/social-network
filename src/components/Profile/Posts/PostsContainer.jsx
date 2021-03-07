import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import { Posts } from "./Posts";

export const PostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updatePostText = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Posts
      updatePostText={updatePostText}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
