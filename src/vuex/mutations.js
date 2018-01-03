const mutations = {
  setUserProfile: (state, payload) => {
    state.userProfile = payload
  },
  setPhotos: (state, payload) => {
    state.photos = payload
  },
  setNewPhoto: (state, payload) => {
    state.photos.push(payload)
    state.userPhotos.push(payload)
  },
  setUserPhotos: (state, payload) => {
    state.userPhotos = payload
  }
}

export default mutations
