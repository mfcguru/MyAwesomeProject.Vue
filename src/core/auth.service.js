import axios from 'axios'

class AuthService {
  isAuthenticated = () => {
    if (localStorage.getItem('userIdentity')) return true
    return false
  }

  setUserIdentity = userIdentity => {
    localStorage.setItem('userIdentity', JSON.stringify(userIdentity))
  }

  login = loginInfo => {
    const url = process.env.VUE_APP_HOST_URL + '/auth/login'
    return axios.post(url, loginInfo)
  }

  register = registerInfo => {
    console.log(registerInfo)
    const url = process.env.VUE_APP_HOST_URL + '/auth/register'
    return axios.post(url, registerInfo)
  }

  logout = () => {
    localStorage.removeItem('userIdentity')
  }

  getToken = () => {
    const userIdentity = JSON.parse(localStorage.getItem('userIdentity'))
    if (!userIdentity) return null
    return userIdentity.token
  }
}
const authService = new AuthService()
export default authService
