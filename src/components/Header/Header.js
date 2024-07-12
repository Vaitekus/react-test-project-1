import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/The_Social_logo_2019.svg" width="160" height="80" alt="logo"/>
          {props.isAuth
            ? <div>{props.login} - <button onClick={props.logoutUser}>Log out</button> </div>
            : <NavLink to="/login">Login</NavLink>}
        </header>
    )
};

export default Header;
