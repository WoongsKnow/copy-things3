<template>
  <header class="main-header">
    <section class="main-menu">
      <h1>Netflix</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </nav>
    </section>
  </header>
  <content class="main">
    <div class="main-content">

    </div>
  </content>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'mobile'
})
const mainContent = '';
</script>
<style scoped>
  .main-header {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: transparent;
    height: 60px;
  }
  .main-header .main-menu {
    display: flex;
    flex-direction: row;
  }
  .main-header .main-menu ul {
    display: flex;
    flex-direction: row;
  }
  .main {
    top: -60px;
  }
</style>
