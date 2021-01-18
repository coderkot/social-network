import React from "react"
import logo from "../../logo2.png"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}
