<template>
    <div v-if="categories && categories.length > 0">
      <div v-for="category in categories" :key="category">
        {{ category.name }} - ID: {{ category['_id'] }}
        <ButtonComponent  class="p-button-outlined" @click="fetchPhotos(category['_id'])">{{ category.name }}</ButtonComponent>
      </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import ButtonComponent from 'primevue/button'

export default {
  name: 'CategoriesList',
  components: {
    ButtonComponent
  },
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    ...mapActions(['fetchPhotos'])
  }
}
</script>
