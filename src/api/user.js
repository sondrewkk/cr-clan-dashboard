import api from './api'

export default {
  async login (email, password) {
    try {
      const response = await api.post('/user/login', { email, password })
      return response
    } catch (err) {
      console.error(err)
    }
  }
}
