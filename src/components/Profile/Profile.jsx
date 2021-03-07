import React from "react";
// import style from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostsContainer } from "./Posts/PostsContainer";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />

      <PostsContainer store={props.store} />
    </div>
  );
};
