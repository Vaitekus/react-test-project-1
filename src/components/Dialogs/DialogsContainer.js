import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let propsItems = (state) => {
  return{
    dialogs: state.dialogsReducer
  }
}

let callbackItems = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text))
    }
  }
}

export default compose(
  connect(propsItems, callbackItems),
  WithAuthRedirectComponent
) (Dialogs);
