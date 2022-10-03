import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    currentPage: 1,
    photos: []
  },
  getters: {},
  mutations: {
    UPDATE_PHOTOS (state, data) {
      console.log('mamy update photos', data)
      state.photos = data
      console.log('mamy update photos state.photos', data)
    },
    FAKE (state, data) {
      console.log('DAKE', data, state)
    }
  },
  actions: {
    async fetchPhotos ({ commit }, page = 1) {
      console.log('page w fetchPhotos', page)
      // console.log('jestem w fetch')
      const res = await axios.get(`${apiUrl}/photos/` + page.page)
      const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
      commit('UPDATE_PHOTOS', photos)
    },
    async fetchCategoryPhotos ({ commit }, { categoryId, page = 1 }) {
      console.log('page w fetchCategoryPhotos', categoryId)
      // console.log('jestem w fetch')
      const res = await axios.get(`${apiUrl}/photos/` + categoryId + '/' + page.page)
      const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
      commit('UPDATE_PHOTOS', photos)
    },
    async addPhoto ({ commit }, photoPayload) {
      // console.log('jestem w fetch')
      const res = await axios.post(`${apiUrl}/photos/`, photoPayload)
      commit('FAKE', res)
    }
  }
}
