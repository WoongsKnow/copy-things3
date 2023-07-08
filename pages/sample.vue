<template>
  <main class="main-content">
    index
    {{ data }}, {{ data2 }}
    <button ref="el" @click="plusData">+</button>
    <button ref="el" @click="plusData">+</button>
    <button ref="el" @click="plusData">+</button>
  </main>
</template>

<script setup lang="ts">
/**plusData
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
let data2 = 0;
const plusData = () => {
  data.value++;
  data2++;
}
</script>
