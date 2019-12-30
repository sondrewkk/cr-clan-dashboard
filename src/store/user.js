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
      
      // Check if player is added to db
      let response = await playerApi.profile(playerTag)

      // If not, add player and then get playerProfile data
      if (!response)
      {
        response = await playerApi.add(playerTag)

        if (response) {
          resposne = await playerApi.profile(playerTag)
        }
      }
      
      // Verify tag with user
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
