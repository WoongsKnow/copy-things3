<template>
  <div class="mandalart-main-box">
    <div class="mandalart-sub-row">
      <div class="box-1x1" contenteditable="true">
        dd
      </div>
      <div class="box-1x2" contenteditable="true">2</div>
      <div class="box-1x3" contenteditable="true">3</div>
    </div>
    <div class="mandalart-sub-row">
      <div class="box-2x1" contenteditable="true">1</div>
      <div class="box-2x2" contenteditable="true">2</div>
      <div class="box-2x3" contenteditable="true">3</div>
    </div>
    <div class="mandalart-sub-row">
      <div class="box-3x1" contenteditable="true">1</div>
      <div class="box-3x2" contenteditable="true">2</div>
      <div class="box-3x3" contenteditable="true">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped>
.mandalart-main-box {
  //margin-right: 10px;
  border: 1px solid #281e1c;
  margin-right: 10px;
}
.mandalart-sub-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.mandalart-sub-row div {
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid #281e1c;
  color: #231A08;
}
.mandalart-sub-row div > span{
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
}
.box-1x1 {
  border-right: 1px solid #281e1c;
  border-bottom: 1px solid #281e1c;
}
.box-1x2 {
  border-right: 1px solid #281e1c;
  border-bottom: 1px solid #281e1c;
}
.box-1x3 {
  border-bottom: 1px solid #281e1c;
}
.box-2x1 {
  border-right: 1px solid #281e1c;
  border-bottom: 1px solid #281e1c;
}
.box-2x2 {
  border-right: 1px solid #281e1c;
  border-bottom: 1px solid #281e1c;
}
.box-2x3 {
  border-bottom: 1px solid #281e1c;
}
.box-3x1 {
  border-right: 1px solid #281e1c;
}
.box-3x2 {
  border-right: 1px solid #281e1c;
}
</style>
