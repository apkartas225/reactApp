import React from 'react';
import style from './Mybutton.module.css'

export const Mybutton = ({ children, ...props }) => {
    return (
        <button  {...props} className={style.btn}>
            {children}
        </button>
    )
}
