<template>
    <div class="hello">
      Hello Nuxt {{ version }}!
      <AppAlert>
        test
      </AppAlert>
    </div>
  </template>

<script setup>
const version = 2 + 1

</script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>
