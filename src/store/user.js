import playerApi from '../api/player'
import userApi from '../api/user'

export const user = {
  namespaced: true,
  state: {
    id: '',
    verified: false
  },
  actions: {
    async verifyTag ({ commit }, tag) {
      const playerTag = tag.tag
      const playerProfile = await playerApi.profile(playerTag)
      
      if (playerProfile.data.tag === playerTag) {
        const verified = await userApi.verify()

        if (verified) {
          commit('verify')
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
    }
  },
  getters: {
    isVerified: state => { return state.verified }
  }
}
