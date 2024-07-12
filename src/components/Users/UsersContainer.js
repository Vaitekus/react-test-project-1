import {connect} from "react-redux";
import {
  setCurrentPage,
  toggleState,
  getUsers, toggleFollowButton
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
  getCurrentPage,
  getIsLoadingState,
  getPageSize,
  getTotalUsersCount,
  getUsersData
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    if(this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  render() {
    if (this.props.isLoading) {
      return (
        <Preloader />
      );
    } else {
      return (
        <Users usersCount={this.props.usersCount}
               pageSize={this.props.pageSize}
               users={this.props.users}
               currentPage={this.props.currentPage}
               changePage={this.changePage}
               toggleFollowButton={this.props.toggleFollowButton}/>
      );
    }
  }
}

// let propsItems = (state) => {
//   return {
//     users: state.usersReducer.users,
//     usersCount: state.usersReducer.totalUsersCount,
//     pageSize: state.usersReducer.pageSize,
//     currentPage: state.usersReducer.currentPage,
//     isLoading: state.usersReducer.isLoading
//   }
// }

let propsItems = (state) => {
  return {
    users: getUsersData(state),
    usersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoadingState(state)
  }
}

export default connect(propsItems, {toggleState, setCurrentPage, toggleFollowButton, getUsers})(UsersContainer)
