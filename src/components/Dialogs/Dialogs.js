import classes from './Dialogs.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validation";

const maxLength50 = maxLengthCreator(50);
const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.messages__form}>
      <Field component={Textarea} cols="30" rows="5" name="message" validate={[required, maxLength50]}/>
      <button className={classes.messages__button} type="submit">&#10140;</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: "addMessageForm"})(addMessageForm)
const Dialogs = (props) => {
  let nameElements = props.dialogs.names.map(
    (name, index) => <Name id={name.id} name={name.text} key={index}/>);

  let messagesElements = props.dialogs.messages.map(
    (message, index) => <Message text={message.text} isOwner={message.isOwner} key={index}/>);

  let addMessage = (text) => {
    props.addMessage(text.message);
  }

  if (!props.isAuth) {
    return <Navigate to="/login"/>;
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
        <AddMessageReduxForm onSubmit={addMessage} />
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;
