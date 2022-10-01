<template>
<header>
  <div class="relative bg-blue-50 shadow-2">
    <div class="flex align-items-center">

      <div class="flex align-items-center p-4 ">
        <router-link
          style="text-decoration: none;
          color: inherit;"
          :to="{ path: '/'}">
        <h1  v-text="'PhotosApp | '" class="underline"/>
        </router-link>
        <h1  v-text="' share your moments'" class="text-lg"/>
      </div>

      <div class="block ml-auto mr-3">
        <router-link
          :to="{ path: '/addphotopage'}">
          <Button label="+ Submit" class="p-button-raised"></Button>
        </router-link>
      </div>
    </div>

    <div class="p-4">
      <Button class="m-2 p-button-outlined">
          <router-link
          :to="{ path: '/categories/Fashion'}"
          >Categories</router-link>
      </Button>
      <Button class="m-2 p-button-outlined">
          <router-link
          :to="{ path: '/categories/Casual'}"
          >Casual</router-link>
      </Button>
      <!-- <Button class="m-2 p-button-raised" v-for="category in categories" :key="category" @click="displayCategoryPhotosInThisView(category['name'])">
      {{ category.name }}
      </Button> -->
    </div>
  </div>

</header>
</template>
<script>
import Button from 'primevue/button'
import { mapState, mapMutations } from 'vuex'
// import PhotoCatalogComponent from '@/components/shared/PhotoCatalog.vue'
export default {
  name: 'theHeader',
  components: {
    Button
    // PhotoCatalogComponent
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
<style>

</style>
