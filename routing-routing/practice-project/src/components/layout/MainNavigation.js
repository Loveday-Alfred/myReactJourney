import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
        <div className={classes.logo}>Great Qoutes</div>
        <nav className={classes.nav}>
          <ul>
            <li><NavLink to='/qoutes' activeClassName={classes.active}>All Qoutes</NavLink></li>
            <li><NavLink to='/new-qoute' activeClassName={classes.active}>Add a Qoute</NavLink></li>
          </ul>
        </nav>
        </header>
    )
}

export default MainNavigation;