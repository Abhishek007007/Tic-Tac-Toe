function LoginValidation(userId, password) {
  if (userId.length !== 0 && password.length >= 10) {
    if (password.length < 10) {
      console.log("Password too short");
    }
    return false;
  } else {
    return false;
  }
}
export default LoginValidation;
