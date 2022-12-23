import { Fragment } from 'react';
import HeaderCardButton from '../HeaderCardButton/HeaderCardButton';
import classes from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <h2>Header</h2>
                <HeaderCardButton />
            </div>
            <div className={classes['main-image']}>
                <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghk-testing-072722-487-1660662505.jpg?crop=0.580xw:0.870xh;0.0929xw,0.0505xh&resize=640:*' alt ='poto' />
            </div>
        </Fragment>
    )
}

export default Header;