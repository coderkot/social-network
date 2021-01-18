import React from "react"
import style from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileCover}>
                {/*<img src="https://biggarden.scot/wp-content/uploads/2019/01/20190119-1-1000x200.jpg" alt=""/>*/}
                <div className={style.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}
