import classes from './MealCard.module.css'
import React from 'react'
import ReactDOM from 'react-dom'
const Card = () =>{
    return (
        <div className={classes["container-card"]} >
          <p>swale</p>
          <h3>Total Amount</h3>
          <h3>$35.65</h3>
          <div>
            <button className={classes['close-btn']}>close</button>
            <button className={classes['order-btn']}>order</button>
          </div>
        </div>
      )
}

const MealCard = () => {
  return( <>{ ReactDOM.createPortal(<Card/>,document.getElementById('card')) }</>)
}

export default MealCard;