import React from "react"
import style from "./PostItem.module.css"

export const PostItem = (props) => {
    return (
        <div className={style.item}>
            <div style={{textAlign: "center"}}>
                <img src='https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png' alt=''/>
                <span className={style.likes}>♥ {props.likes}</span>
            </div>
            <span className={style.message}>{props.text}</span>
        </div>
    )
}
