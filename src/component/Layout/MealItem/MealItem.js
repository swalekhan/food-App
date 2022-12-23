import classes from './MealItem.module.css'
const MealItem = (props) =>{
return (
   <li className={classes.li}> 
    <span className={classes.name}>{props.name}</span>
    <span>{props.description} </span>
    <span className={classes.price}>${props.price}</span>
   </li>
)
}
export default MealItem;