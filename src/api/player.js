import api from './api'

export default {
  async profile (tag) {
    try {
      const response = await api.get(`/player/${tag}`)
      
      return response
    } catch (err) {
      console.error(err)
    }
  },
  async add (tag) {
    try {
      const response = await api.post(`/player/`, { tag: tag })
      
      return response
    } catch (err) {
      console.error(err)
    }
  },
  async chests (tag) {
    try {
      const response = await api.get(`/player/${tag}/chests`)
      
      return response
    } catch (err) {
      console.error(err)
    }
  }
}
