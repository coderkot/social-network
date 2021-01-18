import React from 'react';
import style from './../Dialogs.module.css';

export const Message = (props) => {
    const type = props.incoming ? style.in : style.out;
    return (
        <div className={style.message}>
            <span className={type}>{props.message}</span>
        </div>
    )
}
