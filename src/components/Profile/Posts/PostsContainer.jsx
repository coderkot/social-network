import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import { Posts } from "./Posts";
import StoreContext from "../../../StoreContext";

export const PostsContainer = (props) => {
  // let state = props.store.getState();
  // let addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };
  //
  // let updatePostText = (text) => {
  //   let action = updateNewPostActionCreator(text);
  //   props.store.dispatch(action);
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let updatePostText = (text) => {
          let action = updateNewPostActionCreator(text);
          store.dispatch(action);
        };
        let state = store.getState();
        return(<Posts
          updatePostText={updatePostText}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />)
      }}
    </StoreContext.Consumer>
  );
};
