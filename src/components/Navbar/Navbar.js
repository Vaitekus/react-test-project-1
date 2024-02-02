import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {
  let friendsListElements = props.friends.map(
    (friend, index) => <FriendItem name={friend.name} key={index}/> );
    return (
        <nav className={classes.nav}>
        <ul>
          <li><NavLink to="/profile" className={({ isActive }) => isActive ? classes.active: ""}>Profile</NavLink></li>
          <li><NavLink to="/dialogues" className={({ isActive }) => isActive ? classes.active: ""}>Messages</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? classes.active: ""}>News</NavLink></li>
          <li><NavLink to="/music" className={({ isActive }) => isActive ? classes.active: ""}>Music</NavLink></li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? classes.active: ""}>Settings</NavLink></li>
        </ul>
          <h2>Friends</h2>
          <div className={classes.list}>
            {friendsListElements}
          </div>
      </nav>
    )
};

export default Navbar
