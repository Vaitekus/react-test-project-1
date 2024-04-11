import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();
//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }
//
//   let changeMessage = (text) => {
//     props.store.dispatch(updateMessageTextActionCreator(text));
//   }
//
//   return (
//     <Dialogs changeMessage={changeMessage} addMessage={addMessage} dialogs={state.dialogsReducer}/>
//   )
// }

let propsItems = (state) => {
  return{
    dialogs: state.dialogsReducer
  }
}

let callbackItems = (dispatch) => {
  return {
    changeMessage: (text) => {
      dispatch(updateMessageTextActionCreator(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(propsItems, callbackItems)(Dialogs)
export default DialogsContainer;
