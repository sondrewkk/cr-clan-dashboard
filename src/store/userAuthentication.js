import user from '../api/user'

export const userAuthentication = {
  namespaced: true,
  state: {
    status: 'Unauthorized',
    token: ''
  },
  actions: {
    async login ({ commit }, { email, password }) {
      try {
        commit('setStatusAuthenticating')
        const response = await user.login(email, password)
        const token = response.data.token
        const isVerified = response.data.isVerified
        
        commit('setToken', token)
        commit('setStatusAuthenticated')

        if (isVerified) {
          commit('user/verify', null, { root: true })
        }   
        
        return response
      } catch (err) {
        console.error(err)
      }
    },
    logout ({ commit }) {
      commit('setToken', '')
      commit('setStatusUnauthorized')
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setStatusAuthenticating (state) {
      state.status = 'Authorizing'
    },
    setStatusAuthenticated (state) {
      state.status = 'Authorized'
    },
    setStatusUnauthorized (state) {
      state.status = 'Unauthorized'
    }
  },
  getters: {
    token: state => { return state.token },
    status: state => { return state.status }
  }
}
