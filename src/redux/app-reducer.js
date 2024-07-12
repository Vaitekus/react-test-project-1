import {getAuthUser} from "./auth-reducer";

const type = {
  SET_INITIALIZED: 'SET-INITIALIZED'
}

let initialState = {
  initialized: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_INITIALIZED: {
      return {
        ...state, initialized: true
      }
    }
    default:
      return  state;
  }
}

export const setInitialized = () => ({ type: type.SET_INITIALIZED })

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUser());
    promise.then(() => {
      dispatch(setInitialized());
    })
  }
}

