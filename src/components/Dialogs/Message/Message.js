import classes from "./Message.module.css";

const Message = (props) => {
  let isOwnerClass = props.isOwner ? classes.position : "";
  return (
    <div className={classes.messages__item + ' ' + isOwnerClass}>
      {props.text}
    </div>
  )
};

export default Message;
