import playerApi from '../api/player'
import userApi from '../api/user'

export const user = {
  namespaced: true,
  state: {
    id: '',
    verified: false,
    tag: ''
  },
  actions: {
    async verifyTag ({ commit, state }, tag) {
      const playerTag = tag.tag
      const id = state.id.id
      const response = await playerApi.profile(playerTag)
      const playerProfile = response.data
      
      if (playerProfile.tag === playerTag) {
        const verified = await userApi.verify(id, playerProfile.tag)

        if (verified) {
          commit('verify')
          commit('setTag', playerProfile.tag)
        }
      } else {
        console.log('Could not verify. Tag != tag')
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
    }
  },
  getters: {
    isVerified: state => { return state.verified },
    tag: state => { return state.tag }
  }
}
