<template>
  <div>
    <h2 class="p-3">Category : {{ displayedCategory }}</h2>
    <photo-catalog-component :category="displayedCategory" :key="displayedCategory"></photo-catalog-component>
  </div>
</template>

<script>
import PhotoCatalogComponent from '@/components/shared/PhotoCatalog.vue'
import { mapState } from 'vuex'

import { useRoute } from 'vue-router'

export default {
  name: 'CategorySubPage',
  components: {
    PhotoCatalogComponent
  },
  computed: {
    ...mapState(['categories']),
    displayedCategory () {
      const route = useRoute()
      const categoryName = route.params.categoryName

      return categoryName
      // return this.$router.params.categoryName
    }
  },
  methods: {
    displayCategoryPhotos (category) {
      console.log('displa,.', category)
      return category
    }
  }
}
</script>
