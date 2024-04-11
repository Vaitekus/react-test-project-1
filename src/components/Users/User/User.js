import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>&#9787;</div>
      <div className={classes.info}>
        <span className={classes.name}>{props.user.fullName}</span>
        <div className={classes.location}>
          <span>{props.user.location.country},</span> <br/>
          <span>{props.user.location.city}</span>
        </div>
        <span className={classes.text}>{props.user.message}</span>
      </div>
      <div className={classes.button}>
        <button onClick={() => {props.toggle(props.user.id)}}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
      </div>
    </div>
  )
};

export default User;
