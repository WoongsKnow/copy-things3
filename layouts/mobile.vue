<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<template>
  <div class="mobile-layout">
    <slot />
  </div>
</template>

<style scoped>
.mobile-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
}
</style>
