import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const type = {
  SET_USER_DATA: 'AUTH/SET-USER-DATA',
  TOGGLE_LOADER: 'AUTH/TOGGLE-LOADER'
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

export const getAuthUser = () => async (dispatch) => {
    let response = await authAPI.authUser();
    let messageText = "";

    if(response.messages.length) {
      messageText = response.messages;
      console.log(messageText)
    } else if(response.resultCode === 0){
      let {id, email, login} = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  }

export const loginUser = (login, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(login, password, rememberMe);

  if(response.resultCode === 0){
    dispatch(getAuthUser());
  } else if (response.messages.length) {
    dispatch(stopSubmit( "loginForm",{_error: response.messages}));
  }
}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout();
    let messageText = "";

    if(response.messages.length) {
      messageText = response.messages;
      console.log(messageText)
    } else if(response.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false));
    }
}
