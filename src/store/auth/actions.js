export async function login ({ commit }, user) {
  // await axios (url, data, method) .then into localStorage and commit
  // THIS IS STUB CODE.. in real project use AWAIT axios, then, catch
  const login = 'admin@gmail.com'
  const password = '123456'
  const token = 'admin123456'
  const error = 'Sorry, wrong login or password'
  if (user.login === login && user.password === password) {
    localStorage.setItem('token', token)
    commit('SET_TOKEN', token)
  } else {
    commit('SET_ERROR', error)
    // for develop -> error.message
    console.log(error)
  }
}
