<template>
  <main class="main-content">
    <h2>
      나는 성공하는 사람이 될거야.
    </h2>
    <ul>
      <li>나는 30억을 벌거야.</li>
      <li>뭐할거야..</li>
    </ul>
    <div class="point-board" @click="getPoint($event)">
      <div v-for="i in importance" :key="i">
        <div v-for="e in emergency" :key="e" @click="getPoint($event)"></div>
      </div>
    </div>
    index
    {{ data }}, {{ data2 }}
    <button ref="el" @click="plusData">+</button>
    <button ref="el" @click="plusData">+</button>
    <button ref="el" @click="plusData">+</button>
  </main>
</template>

<script setup lang="ts">
/**
 * layout 설정 방법
 */
// definePageMeta({
//   layout: 'custom'
// })
import { onMounted } from 'vue';

onMounted(() => {
  console.log('mounted')
})
const data = ref(0);
const el = ref(null);
const importance = ref([0, 1, 2, 3, 4])
const emergency = ref([0, 1, 2, 3, 4])
let data2 = 0;
const plusData = () => {
  data.value++;
  data2++;
}
const getPoint = (e: any) => {
  // console.log(e.offsetX)
  console.log(e.offsetX > 50 ? '중요' : '안중요')
  // console.log(e.offsetY)
  console.log(e.offsetY < 50 ? '긴급' : '안긴급')
}
</script>
<style scoped>
  .point-board {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
  .point-board div {
    display: inline-block;
  }
</style>
