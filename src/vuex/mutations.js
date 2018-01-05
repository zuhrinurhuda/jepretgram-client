const mutations = {
  setUsers: (state, payload) => {
    state.users = payload
  },
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
  setPhotoComment: (state, payload) => {
    let photoIndex = state.photos.findIndex(element => {
      return element._id === payload._id
    })
    state.photos.splice(photoIndex, 1, payload)
  }
}

export default mutations
