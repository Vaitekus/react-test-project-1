import "./FormControls.css"

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={'form__control' + (hasError ? ' error' : '')}>
      {props.children}
      {hasError && <p>{meta.error}</p>}
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
