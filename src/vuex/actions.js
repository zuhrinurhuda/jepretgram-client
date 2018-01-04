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
  submitLikePhoto: ({ commit }, id) => {
    http.put(`/photos/like/${id}`, {}, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      commit('setLikePhoto', data.data)
    })
    .catch(err => console.log(err))
  },
  submitFollowUser: ({ commit }, id) => {
    http.put(`/users/${id}`, {}, {
      headers: { accesstoken: localStorage.getItem('accesstoken') }
    })
    .then(({ data }) => {
      // console.log(data)
      commit('setFollowUser', data.data)
    })
    .catch(err => console.log(err))
  }
}

export default actions
