import classes from './MealCard.module.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Card = (props) =>{
    const [valid, setValid] = useState(false);
   const clickHandler = () =>{
    setValid(false)
    props.cardHandler(valid)
   }

    return (
        <div className={classes["container-card"]} >
          <p>swale</p>
          <h3>Total Amount</h3>
          <h3>$35.65</h3>
          <div>
            <button className={classes['close-btn']} onClick={clickHandler} >close</button>
            <button className={classes['order-btn']}  >order</button>
          </div>
        </div>
      )
}

const MealCard = (props) => {
  return( <>{ ReactDOM.createPortal(<Card cardHandler = {props.cardHandler}/>,document.getElementById('card')) }</>)
}

export default MealCard;