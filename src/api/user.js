import api from './api'

export default {
  async login (email, password) {
    try {
      const response = await api.post('/user/login', { email, password })

      if (response.status === 200) {
        const loginInfo = response.data

        if (loginInfo.token) {
          const token = `Bearer ${loginInfo.token}`
          api.defaults.headers.common['Authorization'] = token
        }
  
        return loginInfo
      }
      
    } catch (err) {
      console.error(err)
    }
  },

  async verify (id, tag) {
    try {
      const response = await api.post('/user/verify', { id, tag })

      if (response.status === 200) {
        return response.data
      }
    } catch (err) {
      console.log(err)
    }
  }

}
