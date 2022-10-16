const wrappHandleChangeFunc = (setFunc) => (event) => {
  console.log(event.target.value)
  setFunc(event.target.value);
}

export { wrappHandleChangeFunc };