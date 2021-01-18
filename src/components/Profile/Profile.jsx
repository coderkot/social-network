import React from "react"
// import style from "./Profile.module.css"
import {Posts} from "./Posts/Posts"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>

            <Posts
                posts={props.profilePage.posts} // список постов
                newPostText={props.profilePage.newPostText} // состояние изменения текстэриа
                dispatch={props.dispatch}
            />
        </div>
    )
}
