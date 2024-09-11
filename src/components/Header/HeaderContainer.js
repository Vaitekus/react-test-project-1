import React from "react";
import Header from "./Header";
import {logoutUser} from "../../redux/auth-reducer"
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}
let propsItems = (state) => {
  return {
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
  }
}
export default connect(propsItems, {logoutUser})(HeaderContainer);
