<template>
  <footer>
    <h1 class="">
      <slot name="theFooter" />
     <p class="text-xs"> We have {{ categoriesAmount }} categories</p>
    </h1>
</footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'theFooter',
  computed: {
    ...mapGetters(['categoriesAmount'])
  }
}
</script>
<style>

</style>
