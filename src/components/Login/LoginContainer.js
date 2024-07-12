import React from "react";
import {loginUser} from "../../redux/auth-reducer"
import {connect} from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
}
export default connect(mapStateToProps, {loginUser})(LoginContainer);
