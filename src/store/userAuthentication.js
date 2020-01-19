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
        const loginInfo = await user.login(email, password)
        
        commit('setToken', loginInfo.token)
        commit('setStatusAuthenticated')
        commit('user/setId', { id: loginInfo._id }, { root: true })

        // Tag is only available when user is verified
        if (loginInfo.verified) {
          commit('user/verify', null, { root: true })
          commit('user/setTag', loginInfo.tag, { root: true })
        }   

        const loginSuccsessful = this.token !== ''

        return loginSuccsessful
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
