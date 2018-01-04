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
    let photoIndex2 = state.userPhotos.findIndex(element => {
      return element._id === payload._id
    })
    state.userPhotos.splice(photoIndex2, 1, payload)
  },
  setFollowUser: (state, payload) => {
    // let photoIndex = state.photos.findIndex(element => {
    //   return element._id === payload.photoId
    // })
    console.log(payload)
    // state.photos[photoIndex].uploader = payload.userData
    let uploaderIndex = []
    // console.log(payload.userData._id)
    state.photos.findIndex((element, index) => {
      // console.log(element.uploader._id === payload.userData._id, index)
      if (element.uploader._id === payload._id) {
        uploaderIndex.push(index)
      }
      // return element.uploader._id === payload.userData._id
      // uploaderIndex.push
    })
    console.log(uploaderIndex)

    uploaderIndex.forEach(index => {
      state.photos[index].uploader = payload
    })
  }
}

export default mutations
