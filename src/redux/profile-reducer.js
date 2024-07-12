import {profileAPI} from "../api/api";

const type = {
  ADD_POST: 'ADD-POST',
  SET_PROFILE: 'SET-PROFILE',
  SET_STATUS: 'SET-STATUS',
  TOGGLE_LOADER: 'TOGGLE-LOADER'
}

let initialState = {
  posts: [
    {id: 1, text: "Its look cool!", likesCount: 3},
    {id: 2, text: "My first post", likesCount: 11},
    {id: 3, text: "I like it", likesCount: 4},
    {id: 4, text: "Its look strange", likesCount: 5}
  ],
  profile: null,
  isLoading: false,
  status: ""
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_POST:{
      return {
        ...state,
        posts: [...state.posts, {id: 5, text: action.text.post, likesCount: 0}],
        textareaText: ''
      };
    }
    case type.SET_PROFILE:{
      return {
        ...state,
        profile: action.profile
      };
    }
    case type.SET_STATUS:{
      return {
        ...state,
        status: action.status
      };
    }
    case type.TOGGLE_LOADER: {
      return {...state, isLoading: action.state}
    }
    default:
      return  state;
  }
}

export const addPost = (text) => ({ type: type.ADD_POST, text })
export const setProfile = (profile) => ({type: type.SET_PROFILE, profile})
export const setStatus = (status) => ({type: type.SET_STATUS, status})
export const updateStatus = (status) => ({type: type.SET_STATUS, status})

export const getUserData = (userId) => {
  return (dispatch) => {
    profileAPI.getUserData(userId).then((response) => {
      dispatch(setProfile(response));
    })
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response));
    })
  }
}

export const updateUserStatus = (text) => {
  return (dispatch) => {
    profileAPI.updateStatus(text).then((response) => {
      let messageText = "";
      if(response.messages.length) {
        messageText = response.messages;
        console.log(messageText)
      } else if(response.resultCode === 0){
        dispatch(setStatus(text));
      }
    })
  }
}
