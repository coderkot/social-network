import React from "react";
import style from "../Messages.module.css";
import { NavLink } from "react-router-dom";

export const MessageItem = (props) => {
  let path = `/messages/${props.id}`;

  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
