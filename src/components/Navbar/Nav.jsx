import React from "react"
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom"

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    )
}
