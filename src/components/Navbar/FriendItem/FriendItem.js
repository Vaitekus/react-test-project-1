import classes from "./FriendItem.module.css";

const FriendItem = (props) => {
  return (
    <div className={classes.list__item}>
      <span className={classes.list__checkmark}></span>
      <span className={classes.list__name}>{props.name}</span>
    </div>
  )
};

export default FriendItem;
