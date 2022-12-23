import classes from './Form.module.css'

const Form = () => {
  return (
    <div className={classes.form}>
        <div>
            <p>Amount<span>2</span></p>
        </div>
        <button>+Add</button>
    </div>
  )
}

export default Form;