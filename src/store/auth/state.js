export default function () {
  return {
    // token
    token: localStorage.getItem('token') || '',
    error: [],
    login: null,
    password: null
  }
}
