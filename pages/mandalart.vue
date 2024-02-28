<template>
<section class="mandalart-wrapper">
  <h2>나의 꿈을 위한 만다라트</h2>
  <div class="main-box">
    <div class="row-box">
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
    </div>
    <div class="row-box">
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
    </div>
    <div class="row-box">
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
      <MandalartSubBox></MandalartSubBox>
    </div>
  </div>
</section>
</template>

<script setup>
const data = ref()
</script>

<style scoped>
.mandalart-wrapper {
  position: relative;
  background-color: #fff;
}
.row-box {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
