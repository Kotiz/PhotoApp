import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    categories: [],
    selectedCategory: null
  },
  getters: {
    categoriesAmount (state) {
      return state.categories.length
    }
  },
  mutations: {
    UPDATE_CATEGORIES (state, data) {
      state.categories = data
    },
    UPDATE_SELECTED_CATEGORY (state, category) {
      console.log('UPDATE_SELECTED_CATEGORY', category)
      state.selectedCategory = category
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      console.log('jestem w fetch')
      const res = await axios.get(`${apiUrl}/categories`)
      console.log('jestem w fetch 2', res)
      const categories = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
      commit('UPDATE_CATEGORIES', categories)
    },
    async fetchCategoryPhotos ({ commit }, { page, categoryId }) {
      console.log('page w fetchPhotos', page, categoryId)
      // console.log('jestem w fetch')
      const res = await axios.get(`${apiUrl}/photos/` + categoryId + '/' + page.page)
      console.log('res', res)
      const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
      commit('UPDATE_PHOTOS', photos)
    }
  }
}
