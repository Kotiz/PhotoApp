<template>
  <div class="flex">
    <h2 class="p-3">HOME PAGE</h2></div>
    <div class="flex align-items-center">
    <photo-catalog-component class=""/>
    </div>

</template>

<script>
import PhotoCatalogComponent from '@/components/shared/PhotoCatalog.vue'

export default {
  name: 'HomePage',
  components: {
    PhotoCatalogComponent
  }
}
</script>
