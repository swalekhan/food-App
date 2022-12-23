import React from "react";
import CartIcon from "../../Card/CardIcon";
import classes from './HeaderCardButton.module.css'
const HeaderCardButton = (props) =>{
   const cardHandler = () =>{
    props.cardHandler(true)
   }
  return (
    <button className={classes.button} onClick={cardHandler} >
        <span className={classes.icon}><CartIcon/></span>
        <span >your card</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCardButton;