import user from '../api/user'

export const userAuthentication = {
  namespaced: true,
  state: {
    status: 'Not started',
    token: ''
  },
  actions: {
    async login ({ commit }, { email, password }) {
      try {
        commit('setStatusAuthenticating')
        const response = await user.login(email, password)
        const token = response.data.token
        commit('setToken', token)
        commit('setStatusAuthenticated')
        return response
      } catch (err) {
        console.error(err)
      }
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setStatusAuthenticating (state) {
      state.status = 'Authenticating'
    },
    setStatusAuthenticated (state) {
      state.status = 'Authenticated'
    }
  },
  getters: {
    token: state => { return state.token },
    status: state => { return state.status }
  }
}
