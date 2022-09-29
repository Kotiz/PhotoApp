<template>
  <div id="app" class="">
    <div class="container p-6">

      <AppHeader class="" />
<!--      <home-page-component />-->
      <main>
        <router-view />
      </main>

      <AppFooter class="p-1 m-5">
        <template v-slot:theFooter ></template>
      </AppFooter>

    </div>
  </div>

</template>
<script>
import AppHeader from '@/components/layout/theHeader.vue'
import AppFooter from '@/components/layout/theFooter.vue'
import { mapActions } from 'vuex'
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
    ...mapActions(['fetchCategories'])
  },
  created () {
    this.fetchCategories()
  }
}
</script>
<style lang="scss">
  @import '@/styles/global.scss'
</style>
