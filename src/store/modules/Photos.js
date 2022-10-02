import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    photos: []
  },
  getters: {},
  mutations: {
    UPDATE_PHOTOS (state, data) {
      console.log('mamy update photos', data)
      state.photos = data
      console.log('mamy update photos state.photos', data)
    }
  },
  actions: {
    async fetchPhotos ({ commit }, page = 1) {
      console.log('page w fetchPhotos', page)
      // console.log('jestem w fetch')
      const res = await axios.get(`${apiUrl}/photos/` + page)
      const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
      commit('UPDATE_PHOTOS', photos)
    }
  }
}
