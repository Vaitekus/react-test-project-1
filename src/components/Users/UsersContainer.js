import {connect} from "react-redux";
import Users from "./Users";
import {setUsersActionCreator, toggleActionCreator} from "../../redux/users-reducer";

let propsItems = (state) => {
  return {
    users: state.usersReducer.users
  }
}

let callbackItems = (dispatch) => {
  return {
    toggleState: (id) => {
      dispatch(toggleActionCreator(id))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

const UsersContainer = connect(propsItems, callbackItems)(Users);

export default UsersContainer;
