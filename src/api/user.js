import api from './api'

export default {
  async login (email, password) {
    try {
      const response = await api.post('/user/login', { email, password })

      if (response.data.success) {
        const token = `Bearer ${response.data.token}`
        api.defaults.headers.common['Authorization'] = token
      }
      return response
    } catch (err) {
      console.error(err)
    }
  }
}
