<template>
    <header>
      <h3 class="page-title animate__animated animate__fadeInLeft">
        <slot name="smallTitle" />
      </h3>
    </header>
</template>

<script>
export default {
name: 'SmallTitle'
}
</script>

<style lang="scss">
@import '@/styles/global.scss'
</style>