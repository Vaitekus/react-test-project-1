export const required = (value) => {
  if(value) return undefined;
  return "Field is required";
}

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    if(value.length > maxLength) return `Maxlength is ${maxLength}`;
    return undefined;
  }
}
