import MealItem from './MealItem'
import classes from './MealUl.module.css'
const MealUl = (props) =>{
   return (
    <ul className={classes.ul} >
        {props.DUMMY_MEALS.map((e)=>{
            console.log(e.id)
         return <MealItem name={e.name} description = {e.description} price ={e.price} key={e.id} />
        })} 
    </ul>
   )
}

export default MealUl;