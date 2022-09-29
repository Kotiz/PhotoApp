<template>
  <div>
    <photo-list-item-component v-for="photo in photos" :key="photo" :photo="photo" class=""></photo-list-item-component>
  </div>
</template>

<script>
import PhotoListItemComponent from './PhotoListItem.vue'
export default {
  components: { PhotoListItemComponent },
  name: 'PhotoCatalog',
  props: {
    photos: {
      type: Array,
      required: true
    }
  }

}
</script>
