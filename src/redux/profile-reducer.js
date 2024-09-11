import {profileAPI} from "../api/api";

const type = {
  ADD_POST: 'PROFILE/ADD-POST',
  DELETE_POST: 'PROFILE/DELETE-POST',
  SET_PROFILE: 'PROFILE/SET-PROFILE',
  SET_STATUS: 'PROFILE/SET-STATUS',
  TOGGLE_LOADER: 'PROFILE/TOGGLE-LOADER'
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
        posts: [...state.posts, {id: 5, text: action.text, likesCount: 0}],
        textareaText: ''
      };
    }
    case type.DELETE_POST:{
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id)
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
export const deletePost = (id) => ({ type: type.DELETE_POST, id })
export const setProfile = (profile) => ({type: type.SET_PROFILE, profile})
export const setStatus = (status) => ({type: type.SET_STATUS, status})
export const updateStatus = (status) => ({type: type.SET_STATUS, status})

export const getUserData = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserData(userId);

    dispatch(setProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response));
}

export const updateUserStatus = (text) => async (dispatch) => {
  let response = await profileAPI.updateStatus(text);
  let messageText = "";

  if(response.messages.length) {
    messageText = response.messages;
    console.log(messageText)
  } else if(response.resultCode === 0){
    dispatch(setStatus(text));
  }
}
