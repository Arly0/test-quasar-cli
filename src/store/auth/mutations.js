export function SET_TOKEN (state, token) {
  state.token = token
}
export function SET_ERROR (state, error) {
  // error - array of the diff errors
  state.error.push(error)
}
export function SET_LOGIN (state, login) {
  state.login = login
}
export function SET_PASSWORD (state, password) {
  state.password = password
}
