<template>
  <div class="flex p-3 ">
  <div class="realitve border-blue-200 surface-overlay border-2 border-round">
  <div class="w-auto p-2 ">
    <img
      :src="imageSrc"
      class="image w-5 p-2 ml-8 mt-5 mr-6 ">
<!-- {{ photo.title}} -->
  </div>
    <p>by :  {{ photo.author}}</p>
    <p>Description : {{ photo.description}}</p>
    <p>Votes : {{ photo.votes}}</p>
    <p>Category : {{ photo.category}}</p>
  </div>
  </div>
</template>

<script>
import { imagesUrl } from '@/config'
export default {
  name: 'PhotosListItem',
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      return `${imagesUrl}/${this.photo.src}`
    }
  }
}
</script>
