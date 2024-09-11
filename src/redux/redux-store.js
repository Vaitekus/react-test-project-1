import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";
import {thunk} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reduсers = combineReducers({
  appReducer,
  profileReducer,
  dialogsReducer,
  navbarReducer,
  usersReducer,
  authReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduсers, composeEnhancers(
  applyMiddleware(thunk)
));

window.__store__ = store;
export default store;
