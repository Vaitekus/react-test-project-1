import axios from "axios";
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9dd2292f-afe8-404f-a758-7ff868217dff"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data)
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`
    ).then(response => response.data)
  },

  followUser(id)  {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data)
  }
}

export const profileAPI = {
  getUserData(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
      .then(response => response.data)
  },
  updateStatus(statusText) {
    return instance.put(`/profile/status`, {status: statusText})
      .then(response => response.data)
  }
}

export const authAPI = {
  authUser() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      .then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => response.data)
  }
}
