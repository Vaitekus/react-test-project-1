import {createSelector} from "reselect";

const getUsers = (state) => {
  return state.usersReducer.users
}

export const getUsersData = createSelector(getUsers,
(users) => {
  return users.filter(user => true)
});
export const getTotalUsersCount = (state) => {
  return state.usersReducer.totalUsersCount
}

export const getPageSize= (state) => {
  return state.usersReducer.pageSize
}

export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage
}

export const getIsLoadingState = (state) => {
  return state.usersReducer.isLoading
}
