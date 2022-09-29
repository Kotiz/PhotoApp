<template>
    <header>
      <h1 class="page-title animate__animated animate__fadeInLeft">
        <slot name="mainTitle" />
      </h1>
    </header>
</template>

<script>
export default {
name: 'MainTitle'
}
</script>

<style lang="scss">
@import '@/styles/global.scss'
</style>
