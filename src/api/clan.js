import api from './api'

export default {
  async clan (tag) {
    try {
      const response = await api.get(`/clan/${tag}`)
      
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
}
