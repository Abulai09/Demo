import React from "react";
import s from './input.module.css'


const Input = ({input,meta,...props})=>{

    let hasError = meta.touched && meta.error


    return(
        <div className={s.formControl + " " + (hasError && s.error )}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}

export let Input2= ({input,meta,...props})=>{
    let hasError = meta.touched && meta.error

    return(
        <div className={s.formControl+" "+(hasError && s.error)}>
            <input type="text" {...input} {...props}/>
            {hasError && <span className={s.error} >{meta.error}</span>}
        </div>
    )
}

export let Input3= ({input,meta,...props})=>{
    let hasError = meta.touched && meta.error

    return(
        <div className={s.formControl+" "+(hasError && s.error)}>
            <input type="password" {...input} {...props}/>
            {hasError && <span className={s.error} >{meta.error}</span>}
        </div>
    )
}


export default Input