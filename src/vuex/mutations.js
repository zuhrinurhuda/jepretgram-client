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
    // photos
    let photoIndex1 = state.photos.findIndex(element => {
      return element._id === payload._id
    })
    state.photos.splice(photoIndex1, 1, payload)

    // user photos
    // let photoIndex2 = state.userPhotos.findIndex(element => {
    //   return element._id === payload._id
    // })
    // state.userPhotos.splice(photoIndex2, 1, payload)
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
  }
}

export default mutations
