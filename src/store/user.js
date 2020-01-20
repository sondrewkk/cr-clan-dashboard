// import playerApi from '../api/player'
import userApi from '../api/user'

export const user = {
  namespaced: true,
  state: {
    id: '',
    verified: false,
    tag: '',
    clanTag: '',
    role: ''
  },
  actions: {
    async verifyTag ({ commit, state }, tag) {
      const { id } = state.id

      const verifyInfo = await userApi.verify(id, tag)
      
      if (verifyInfo.verified) {
        commit('setTag', verifyInfo.tag)
        commit('setClanTag', verifyInfo.clanTag)
        commit('setRole', verifyInfo.role)
        commit('userAuthentication/setToken', verifyInfo.token, { root: true })
        commit('verify')
      } else {
        console.log('Could not verify player with tag: ' + tag)
      }
    }
  },
  mutations: {
    verify (state) {
      state.verified = true
    },
    setId (state, id) {
      state.id = id
    },
    setTag (state, tag) {
      state.tag = tag
    },
    setClanTag (state, clanTag) {
      state.clanTag = clanTag
    },
    setRole (state, role) {
      state.role = role
    }
  },
  getters: {
    isVerified: state => { return state.verified },
    tag: state => { return state.tag },
    clanTag: state => { return state.clanTag },
    role: state => { return state.role }
  }
}
