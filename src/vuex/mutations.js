const mutations = {
  setUserProfile: (state, payload) => {
    state.userProfile = payload
  },
  setPhotos: (state, payload) => {
    state.photos = payload
  },
  setNewPhoto: (state, payload) => {
    console.log(payload)
    state.photos.push(payload)
    console.log(state.photos)
  }
}

export default mutations
