import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


let propsItemsRedirect = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
}
export const WithAuthRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) {
        return <Navigate to="/login"/>;
      }
      return <Component {...this.props} />
    }
  }

  return connect(propsItemsRedirect)(RedirectComponent);
}
