import React from "react";
import CartIcon from "../../Card/CardIcon";
import classes from './HeaderCardButton.module.css'
const HeaderCardButton = () =>{
  return (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span >your card</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCardButton;