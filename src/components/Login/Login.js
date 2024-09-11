import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validation";
import {Navigate} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      {createField( "Login", "email", [required], Input, {type: "email"})}
      {createField( "Password", "password", [required], Input, {type: "password"})}
      {createField( "", "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
      {error ? <p className={"validation__message"}>{error}</p> : ""}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>

  )
}

const LoginReduxForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

const Login = (props) => {
  const submitForm = (data) => {
    props.loginUser(data.email, data.password , data.rememberMe);
  }
  if (props.isAuth) {
    return <Navigate to="/profile"/>;
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submitForm} />
    </>
  )
}
export default Login
