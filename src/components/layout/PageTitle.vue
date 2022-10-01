<template>
    <header>
      <h2 class="page-title animate__animated animate__fadeInLeft">
        <slot name="PageTitle" />
        {{ categories.name }} 
      </h2>
    </header>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'PageTitle',
    components: {
    },
    computed: {
      ...mapState(['categories'])
    }
  }
  </script>