<template>
  <div>
    <h1>CATEGORY PAGE</h1>
<!--    tutaj kategorie-->
<!--    a potem po wybraniu foty z kategorii-->

    v1 czyli ładowanie contentu w obrębie jednego widoku (bez routingu czyli w obrębie jednego URLa)
    <div v-for="category in categories" :key="category" @click="displayCategoryPhotosInThisView(category['name'])">
      {{ category.name }}
    </div>

    fff {{ selectedCategory }}
    <div v-if="selectedCategory" style="flex background-color: red" :key="selectedCategory">
      selected category: {{ selectedCategory }}

      <photo-catalog-component :category="selectedCategory"></photo-catalog-component>
    </div>

    <br /><br />
    v2 czyli ładowanie contentu do podstron (widoki aka zmiana route`a czyli zmiana URL`a w pasku adresu)

    <div v-for="category in categories" :key="category + 'aa'" @click="displayCategoryPhotosAsSeparateView(category['name'])">
      {{ category.name }}
    </div>

  </div>
</template>

<script>
import PhotoCatalogComponent from '@/components/shared/PhotoCatalog.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CategoryPage',
  // data () {
  //   return {
  //     selectedCategory: null
  //   }
  // },
  created () {
    console.log('URUCHAMIAJĄ MNIE')
  },
  components: {
    PhotoCatalogComponent
  },
  computed: {
    ...mapState(['categories', 'selectedCategory']),
    // ...mapState(['categories']),
    displayedCategory () {
      return this.$router.params
    }
  },
  methods: {
    ...mapMutations(['UPDATE_SELECTED_CATEGORY']),
    displayCategoryPhotosInThisView (category) {
      this.selectedCategory = category
      this.UPDATE_SELECTED_CATEGORY(category)
      // this.$store.commit('UPDATE_SELECTED_CATEGORY')
      console.log('displa,.', category)
      // return category
    },
    displayCategoryPhotosAsSeparateView (categoryName) {
      console.log('ocb displayCategoryPhotosAsSeparateView', categoryName)
      // this.$router.push({ name: 'HomePage' })
      this.$router.push({ name: 'CategorySubPage', params: { categoryName } })
      // console.log('displa,.', category)
      // return category
    }
  }
}
</script>
