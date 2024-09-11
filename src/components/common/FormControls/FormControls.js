import "./FormControls.css"
import {Field} from "redux-form";
import React from "react";

const FormControl = ({input, meta: {error, touched}, children}) => {
  const hasError = error && touched;

  return (
    <div className={'form__control' + (hasError ? ' error' : '')}>
      {children}
      {hasError && <p>{error}</p>}
    </div>

  )
}
export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;

  return (
    <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
  )
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props;

  return (
    <FormControl {...props}> <input {...input} {...restProps}></input></FormControl>
  )
}

export const createField = (placeholder, name, validate, component, props = {}, text = "") => {
  return (
    <div>
      <Field placeholder={placeholder} name={name} validate={validate} component={component} {...props}/> {text}
    </div>
  )
}
