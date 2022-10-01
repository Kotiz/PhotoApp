<template>
<div class="grid max-w-20rem m-1 p-shadow-5 border-2 border-primary-200 hover:border-cyan-700 border-round">
  <img
    :src="imageSrc"
    class="p-2 ml-auto mr-auto mt-auto mb-auto"
    style="height: 400px" />
<!-- {{ photo.title}} -->
  <div class="solid">
    <span class="">
      <h3 class="p-2">{{ photo.description}}</h3><br>
      <h4 class="p-2">by :  {{ photo.author}}</h4> <br></span>
      <!-- Votes : {{ photo.votes}}<br> -->
      <Button :label="photo.category" class="p-2 p-disabled m-1 p-button-outlined" icon="pi pi-bookmark"></Button><br>
      <Button :label="photo.votes" icon="pi pi-heart"></Button>
  </div>
</div>
</template>

<script>
import { imagesUrl } from '@/config'
import Button from 'primevue/button'
export default {
  name: 'PhotosListItem',
  components: {
    Button
    // PhotoCatalogComponent
  },
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
