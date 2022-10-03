<template>
  <div id="app">
    <div class="container p-4">

      <AppHeader class="header mt-2 mb-2" />
<!--      <home-page-component />-->
      <main>
        <router-view />
      </main>

      <AppFooter class="footer mt-2 mb-2">
        <template v-slot:theFooter ></template>
      </AppFooter>

    </div>
  </div>

</template>
<script>
import AppHeader from '@/components/layout/theHeader.vue'
import AppFooter from '@/components/layout/theFooter.vue'
// import CategoriesList from './components/features/CategoriesList.vue'
// import HomePageComponent from './views/HomePage.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
    // CategoriesList
    // HomePageComponent
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('Categories/fetchCategories')
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>
<style lang="scss">
  @import '@/styles/global.scss'
</style>
