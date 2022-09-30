import classes from './Myinput.module.css'

export const Myinput = ( props ) => {
   
    return (
        <input className={classes.input} {...props}/>
    )
}