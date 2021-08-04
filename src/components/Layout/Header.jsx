import classes from './Header.module.css';
import Banner from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return(
        <>
            <header className={classes.header}>
                <h1>Mom's Store</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={Banner} alt="Banner" />
            </div>
        </>
    );
};

export default Header;