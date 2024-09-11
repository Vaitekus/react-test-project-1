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
    const {users, currentPage, pageSize} = this.props;
    if(users.length === 0) {
      this.props.getUsers(currentPage, pageSize);
    }
  }

  changePage = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, pageSize);
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
