import api from './api'

export default {
  async profile (tag) {
    try {
      const response = await api.get(`/player/${tag}`)
      
      return response
    } catch (err) {
      console.error(err)
    }
  }
}
