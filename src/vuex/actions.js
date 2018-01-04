import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const actions = {
  getAllUsers: ({ commit }) => {
    http.get('/users', {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setUsers', data.data)
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
    // console.log(payload)
    http.put(`/photos/like/${payload._id}`, {}, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      // console.log(data.data)
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
      // console.log(data.data.followers)
      commit('setUserFollower', data.data)
    })
    .catch(err => console.log(err))

    // set following
    http.put('/users/following', payload, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      // console.log(data.data.following)
    })
    .catch(err => console.log(err))
  }
}

export default actions
