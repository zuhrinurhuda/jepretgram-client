import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const actions = {
  /**
   * Actions for users route
   */
  userLogin: ({ commit }, payload) => {
    http.post('/users/login', {}, {
      headers: { accesstoken: payload.authResponse.accessToken }
    })
    .then(({ data }) => {
      localStorage.setItem('accesstoken', data.data)
      window.location.replace('/')
    })
    .catch(err => console.log(err))
  },
  getUserProfile: ({ commit }) => {
    http.get('/users/profile', {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setUserProfile', data.data)
    })
    .catch(err => console.log(err))
  },

  /**
   * Action for photos route
   */
  getAllPhotos: ({ commit }) => {
    http.get('/photos', {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setPhotos', data.data)
    })
    .catch(err => console.log(err))
  },
  uploadNewPhoto: ({ commit }, payload) => {
    http.post('/photos', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accesstoken: localStorage.getItem('accesstoken')
      }
    })
    .then(({ data }) => {
      commit('setNewPhoto', data.data)
    })
    .catch(err => console.log(err))
  },
  getUserPhotos: ({ commit }) => {
    http.get('/photos/profile', {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setUserPhotos', data.data)
    })
    .catch(err => console.log(err))
  },
  submitLikePhoto: ({ commit }, payload) => {
    http.put(`/photos/${payload._id}/like`, {}, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setLikePhoto', data.data)
    })
    .catch(err => console.log(err))
  },
  submitFollowUser: ({ commit }, payload) => {
    // set follower
    http.put(`/users/follower/${payload.uploader._id}`, {}, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setUserFollower', data.data)
    })
    .catch(err => console.log(err))

    // set following
    http.put('/users/following', payload, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      // nothing
    })
    .catch(err => console.log(err))
  },
  sendPhotoDetail: ({ commit }, payload) => {
    commit('setPhotoDetail', payload)
  },

  /**
   * Actions for comment route
   */
  submitComment: ({ commit }, payload) => {
    let comment = { comment: payload.comment }
    http.post('/comments', comment, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      http.put(`/photos/${payload.photoDetail._id}/comment`, data.data, {
        headers: { accesstoken: localStorage.getItem('accesstoken') }
      })
      .then(({ data }) => {
        commit('setPhotoComment', data.data)
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  },
  getPhotoComments: ({ commit }, payload) => {
    http.get(`/comments/${payload}`, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
}

export default actions
