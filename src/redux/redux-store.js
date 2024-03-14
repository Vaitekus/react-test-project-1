import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";

let reduсers = combineReducers({
  profileReducer,
  dialogsReducer,
  navbarReducer
});

let store = createStore(reduсers);

export default store;
