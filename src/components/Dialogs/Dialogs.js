import classes from './Dialogs.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let nameElements = props.dialogs.names.map(
    (name, index) => <Name id={name.id} name={name.text} key={index} />);

  let messagesElements = props.dialogs.messages.map(
    (message, index) => <Message text={message.text} isOwner={message.isOwner} key={index}/>);

  let newMessageElement = React.createRef();

  let updateTextareaText = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
  }
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }
  return (
    <div className={classes.messages}>
      <h1 className={classes.messages__heading}>Dialogues</h1>
      <div className={classes.messages__names}>
        <ul>
          {nameElements}
        </ul>
      </div>
      <div className={classes.messages__items}>
        <form onSubmit={(event) => addMessage(event)} className={classes.messages__form}>
          <textarea onChange={updateTextareaText} ref={newMessageElement} className={classes.messages__textarea}  value={props.dialogs.textareaText} name="message" id="" cols="30" rows="5"></textarea>
          <button className={classes.messages__button} type="submit">&#10140;</button>
        </form>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;
