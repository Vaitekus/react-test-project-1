import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validation";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field type="email" validate={[required]} placeholder={"Login"} name={"email"} component={Input}/>
      </div>
      <div>
        <Field type="password" validate={[required]} placeholder={"Password"} name={"password"} component={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"rememberMe"}/> Remember me
      </div>
        {props.error ? <p className={"validation__message"}>{props.error}</p> : ""}
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
