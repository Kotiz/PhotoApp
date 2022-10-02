import { createStore } from 'vuex'
// import axios from 'axios'
// import { apiUrl } from '@/config'
import Categories from './modules/Categories'
import Photos from './modules/Photos'

export default createStore({
  // state: {
  //   categories: [],
  //   photos: [],
  //   selectedCategory: null
  // },
  // getters: {
  //   categoriesAmount (state) {
  //     return state.categories.length
  //   }
  // },
  // mutations: {
  //   UPDATE_CATEGORIES (state, data) {
  //     state.categories = data
  //   },
  //   UPDATE_SELECTED_CATEGORY (state, category) {
  //     console.log('UPDATE_SELECTED_CATEGORY', category)
  //     state.selectedCategory = category
  //   },
  //   UPDATE_PHOTOS (state, data) {
  //     console.log('mamy update photos', data)
  //     state.photos = data
  //     console.log('mamy update photos state.photos', data)
  //   }
  // },
  // actions: {
  //   async fetchCategories ({ commit }) {
  //     console.log('jestem w fetch')
  //     const res = await axios.get(`${apiUrl}/categories`)
  //     console.log('jestem w fetch 2', res)
  //     const categories = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
  //     commit('UPDATE_CATEGORIES', categories)
  //   },
  //   async fetchPhotos ({ commit }, page = 1) {
  //     console.log('page w fetchPhotos', page)
  //     // console.log('jestem w fetch')
  //     const res = await axios.get(`${apiUrl}/photos/` + page)
  //     const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
  //     commit('UPDATE_PHOTOS', photos)
  //   },
  //   async fetchCategoryPhotos ({ commit }, { page, categoryId }) {
  //     console.log('page w fetchPhotos', page, categoryId)
  //     // console.log('jestem w fetch')
  //     const res = await axios.get(`${apiUrl}/photos/` + categoryId + '/' + page)
  //     console.log('res', res)
  //     const photos = res.data // niby niepotrzebny narzut, ale podnosi czytelność (przy braku TS)
  //     commit('UPDATE_PHOTOS', photos)
  //   }
  // },
  modules: {
    Categories,
    Photos
  }
})
