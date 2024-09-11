import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = ({user, toggleFollowButton}) => {
  let updateFollowingButton = () => {
    toggleFollowButton(user.id, user.followed);
  }
  return (
    <div className={classes.container}>
      <NavLink to={"/profile/" + user.id}>
        <div className={classes.icon}>&#9787;</div>
      </NavLink>
      <div className={classes.info}>
        <span className={classes.name}>{user.name}</span>
        <div className={classes.location}>
        </div>
        <span className={classes.text}>{user.status}</span>
      </div>
      <div className={classes.button}>
        <button disabled={user.disableButton} onClick={updateFollowingButton}>{user.followed ? 'Unfollow' : 'Follow'}</button>
      </div>
    </div>
  )
};

export default User;
