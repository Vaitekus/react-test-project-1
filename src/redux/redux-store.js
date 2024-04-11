import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersReducer} from "./users-reducer";

let reduсers = combineReducers({
  profileReducer,
  dialogsReducer,
  navbarReducer,
  usersReducer
});

let store = createStore(reduсers);

window.store = store; //?????
export default store;
