import {usersAPI} from "../api/api";

const type = {
  TOGGLE: 'USERS/TOGGLE',
  SET_USERS: 'USERS/SET-USERS',
  SET_TOTAL_COUNT: 'USERS/SET-TOTAL-COUNT',
  SET_CURRENT_PAGE: 'USERS/SET-CURRENT-PAGE',
  TOGGLE_LOADER: 'USERS/TOGGLE-LOADER',
  TOGGLE_FOLLOWING_DISABLE: 'USERS/TOGGLE-FOLLOWING-BUTTON',
  SET_FOLLOWING_DISABLE: 'USERS/SET-FOLLOWING-DISABLE'
}

let initialState = {
  users: [
    /*{id: 1, followed: true, fullName: 'Olha', location: {country: 'Ukraine', city: 'Kharkiv'}, message: 'I like my country'},
    {id: 2, followed: true, fullName: 'Kate', location: {country: 'Ukraine', city: 'Kiev'}, message: 'Its cool'},
    {id: 3, followed: true, fullName: 'Mark', location: {country: 'Poland', city: 'Krakow'}, message: 'I am from EU'},
    {id: 4, followed: false, fullName: 'Sergey', location: {country: 'Czech republic', city: 'Praha'}, message: 'Beer .....'},
    {id: 5, followed: true, fullName: 'Oleg', location: {country: 'Ukraine', city: 'Rivne'}, message: 'Be brave'},
    {id: 6, followed: true, fullName: 'Piter', location: {country: 'USA', city: 'New York'}, message: '....'}*/
  ],
  textareaText: '',
  totalUsersCount: 0,
  pageSize: 100,
  currentPage: 1,
  isLoading: false,
  followingInProgress: false
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE:{
      return {
        ...state,
        users: state.users.map((user) => {
          if(user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user
        })
      };
    }
    case type.SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case type.SET_TOTAL_COUNT: {
      return {
        ...state, totalUsersCount: action.totalCount
      }
    }
    case type.SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case type.TOGGLE_LOADER: {
      return {...state, isLoading: action.state}
    }
    case type.TOGGLE_FOLLOWING_DISABLE:{
      return {
        ...state,
        users: state.users.map((user) => {
          if(user.id === action.userId) {
            return {...user, disableButton: !user.disableButton}
          }
          return user
        })
      };
    }
    case type.SET_FOLLOWING_DISABLE:{
      return {
        ...state,
        users: state.users.map((user) => {
            return {...user, disableButton: false}
        })
      };
    }
    default:
      return  state;
  }
}

export const toggleState = (userId) => ({ type: type.TOGGLE, userId })
export const toggleFollowingDisable = (userId, buttonState) => ({ type: type.TOGGLE_FOLLOWING_DISABLE, userId })
export const setUsers = (users) => ({ type: type.SET_USERS, users })
export const setFollowingDisable= () => ({ type: type.SET_FOLLOWING_DISABLE })
export const setTotalCount = (totalCount) => ({ type: type.SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: type.SET_CURRENT_PAGE, currentPage })
export const toggleLoaderState = (state) => ({ type: type.TOGGLE_LOADER, state })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleLoaderState(true));

  let response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleLoaderState(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalCount( response.totalCount));
  dispatch(setFollowingDisable());
}

export const toggleFollowButton = (userId, followedUser) => async (dispatch) => {
    dispatch(toggleFollowingDisable(userId));

    if(followedUser) {
      let response = await usersAPI.unfollowUser(userId);

      if(response.resultCode === 0){
        dispatch(toggleState(userId));
        dispatch(toggleFollowingDisable(userId));
      }
    } else {
      let response = await usersAPI.followUser(userId);

      if(response.resultCode === 0){
        dispatch(toggleState(userId));
        dispatch(toggleFollowingDisable(userId));
      }
    }
}
