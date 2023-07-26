<template>
<section class="mandalart-wrapper">
  <h2>나의 꿈을 위한 만다라트</h2>
  <div class="main-box">
    <div class="row-box">
      <div class="sub-box">

      </div>
      <div class="sub-box">

      </div>
      <div class="sub-box">

      </div>
      <MandalartSubBox></MandalartSubBox>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ikigai",
  components: {}

}
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
.sub-box {
  width: 300px;
  height: 300px;
  border: 1px solid #000000;
  margin-right: 10px;
}
.sub-box:last-child {
  margin-right: 0px;
}
</style>
