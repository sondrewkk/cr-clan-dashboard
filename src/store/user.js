import http from 'axios'

export const user = {
  namespaced: true,
  state: {
    token: ''
  },
  actions: {
    login ({ commit }, { email, password }) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await http.post('http://localhost:8081/api/user/login', { email, password })
          console.log(response)
          resolve()
        } catch (err) {
          console.log(err)
        }
      })
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  getters: {
    token: state => { return state.token }
  }
}
