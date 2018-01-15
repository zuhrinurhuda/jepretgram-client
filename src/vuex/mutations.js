const mutations = {
  /**
   * Mutations for users route
   */
  setUserProfile: (state, payload) => {
    state.userProfile = payload
  },

  /**
   * Mutations for photos route
   */
  setPhotos: (state, payload) => {
    state.photos = payload
  },
  setUserPhotos: (state, payload) => {
    state.userPhotos = payload
  },
  setNewPhoto: (state, payload) => {
    state.photos.unshift(payload)
    state.userPhotos.unshift(payload)
  },
  setLikePhoto: (state, payload) => {
    let photoIndex = state.photos.findIndex(element => {
      return element._id === payload._id
    })
    state.photos.splice(photoIndex, 1, payload)
  },
  setUserFollower: (state, payload) => {
    // change follower data in photos
    let uploaderIndex = []
    state.photos.findIndex((element, index) => {
      if (element.uploader._id === payload._id) {
        uploaderIndex.push(index)
      }
    })
    uploaderIndex.forEach(index => {
      state.photos[index].uploader = payload
    })
  },
  setPhotoDetail: (state, payload) => {
    state.photoDetail = payload
  },

  /**
   * Mutations for comment route
   */
  setPhotoComment: (state, payload) => {
    let photoIndex = state.photos.findIndex(element => {
      return element._id === payload._id
    })
    state.photos.splice(photoIndex, 1, payload)
    state.userPhotos.splice(photoIndex, 1, payload)
    state.photoDetail = payload
  },

  /**
   * Loading
   */
  setLoadingStatus: (state, payload) => {
    state.isLoading = payload
  }
}

export default mutations
