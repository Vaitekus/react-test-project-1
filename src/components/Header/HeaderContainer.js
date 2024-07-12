import React from "react";
import Header from "./Header";
// import {getAuthUser, setAuthUserData} from "../../redux/auth-reducer"
import {logoutUser} from "../../redux/auth-reducer"
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUser();
  // }

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
// export default connect(propsItems, {setAuthUserData, getAuthUser})(HeaderContainer);
export default connect(propsItems, {logoutUser})(HeaderContainer);
