<template>
  <div class="flex">
  <div v-if="photos" class=" ">
    <!-- photo ktore przyszly z API  {{  photos }} -->
    <photo-list-component :photos="photos" class="grid p-3"></photo-list-component>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PhotoListComponent from './PhotoList.vue'

export default {
  name: 'PhotoCatalog',
  components: {
    PhotoListComponent
  },
  methods: {
    ...mapActions(['fetchPhotos', 'fetchCategoryPhotos'])
  },
  computed: {
    ...mapState(['photos'])
  },
  created () {
    console.log('create', this.category)

    if (!this.category) this.fetchPhotos(1)
    else this.fetchCategoryPhotos({ categoryId: this.category, page: 1 })
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
