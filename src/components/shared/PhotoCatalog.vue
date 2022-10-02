<template>
  <div class="flex">
  <div v-if="photos" class=" ">
    <!-- photo ktore przyszly z API  {{  photos }} -->
    <photo-list-component :photos="photos" class="grid p-3"></photo-list-component>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import PhotoListComponent from './PhotoList.vue'

export default {
  name: 'PhotoCatalog',
  components: {
    PhotoListComponent
  },
  methods: {
    // ...mapActions(['fetchPhotos', 'fetchCategoryPhotos'])
    ...mapActions(['Categories/fetchCategories']),
    ...mapActions(['Photos/fetchPhotos'])
  },
  computed: {
    // ...mapState(['photos'])
    photos () {
      console.log('bababab this.$store', this.$store)
      return this.$store.state.Photos.photos
    }

  },
  created () {
    console.log('create', this.category)
    if (this.category) {
      this.$store.dispatch('Photos/fetchCategoryPhotos', { categoryId: this.category })
    } else {
      this.$store.dispatch('Photos/fetchPhotos')
    }
    // console.log('categoryId', categoryId)
  },
  props: {
    category: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/global.scss'
</style>
