<template>
  <div class="">
    <h2 class="">HOME PAGE</h2>

    <photo-catalog-component class=" justify-content-center"/>
    <!-- <photo-list-item-component /> -->
    <!-- <photo-list-component /> -->
    </div>

</template>

<script>
import PhotoCatalogComponent from '@/components/shared/PhotoCatalog.vue'
// import PhotoListItemComponent from '@/components/shared/PhotoListItem.vue'
// import PhotoListComponent from '@/components/shared/PhotoList.vue'

export default {
  name: 'HomePage',
  components: {
    PhotoCatalogComponent
    // PhotoListItemComponent
    // PhotoListComponent
  }
}
</script>
