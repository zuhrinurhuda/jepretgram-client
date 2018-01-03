import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const actions = {
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
  }
}

export default actions
