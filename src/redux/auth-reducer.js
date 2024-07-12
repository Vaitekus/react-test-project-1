import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const type = {
  SET_USER_DATA: 'SET-USER-DATA',
  TOGGLE_LOADER: 'TOGGLE-LOADER'
}

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER_DATA: {
      return {
        ...state, ...action.payload
      }
    }
    default:
      return  state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: type.SET_USER_DATA, payload: {userId, email, login, isAuth} })

export const getAuthUser = () => {
  return (dispatch) => {
    return authAPI.authUser().then((data) => {
      let messageText = "";
      if(data.messages.length) {
        messageText = data.messages;
        console.log(messageText)
      } else if(data.resultCode === 0){
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}

export const loginUser = (login, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(login, password, rememberMe).then((data) => {
       if(data.resultCode === 0){
        dispatch(getAuthUser());
      } else if (data.messages.length) {
        dispatch(stopSubmit( "loginForm",{_error: data.messages}));
      }
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      let messageText = "";
      if(data.messages.length) {
        messageText = data.messages;
        console.log(messageText)
      } else if(data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
}
