import playerApi from '../api/player'

export const user = {
  namespaced: true,
  state: {
    verified: false
  },
  actions: {
    async verifyTag ({ commit }, tag) {
      const playerTag = tag.tag
      const playerProfile = await playerApi.profile(playerTag)
      
      if (playerProfile.data.tag === playerTag) {
        commit('verify')
      } else {
        console.log('Could not verify. Tag != tag')
      }
    }
  },
  mutations: {
    verify (state) {
      state.verified = true
    }
  },
  getters: {
    isVerified: state => { return state.verified }
  }
}
