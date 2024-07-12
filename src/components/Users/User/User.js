import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
  let updateFollowingButton = () => {
    props.toggleFollowButton(props.user.id, props.user.followed);
  }
  return (
    <div className={classes.container}>
      <NavLink to={"/profile/" + props.user.id}>
        <div className={classes.icon}>&#9787;</div>
      </NavLink>
      <div className={classes.info}>
        <span className={classes.name}>{props.user.name}</span>
        <div className={classes.location}>
        </div>
        <span className={classes.text}>{props.user.status}</span>
      </div>
      <div className={classes.button}>
        <button disabled={props.user.disableButton} onClick={updateFollowingButton}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
      </div>
    </div>
  )
};

export default User;
