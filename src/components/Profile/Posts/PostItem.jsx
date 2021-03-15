import React from "react";
import style from "./PostItem.module.css";
import userPhoto from '../../../assets/img/profile.png'

export const PostItem = (props) => {
  return (
    <div className={style.item}>
      <div style={{ textAlign: "center" }}>
        <img
          src={userPhoto}
          alt=""
        />
        <span className={style.likes}>♥ {props.likes}</span>
      </div>
      <span className={style.message}>{props.text}</span>
    </div>
  );
};
