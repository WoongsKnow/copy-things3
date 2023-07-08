<template>
  <main class="main-content">
    console test
  </main>
</template>

<script setup lang="ts">
/**
 * layout 설정 방법
 */
import { onMounted } from 'vue';

onMounted(() => {
  console.log('mounted')
})
console.log()

console.error()

console.warn()

console.info()

console.clear()

console.table()

console.group('groupA')
console.log('aa')
console.error('bb')
console.warn('cc')
console.info('dd')
console.group('groupB')
console.log('aa')
console.log('bb')
console.groupEnd()
console.groupEnd()
console.group('groupC')
console.log('aa')
console.log('bb')
console.groupEnd()
console.time('timeA')

console.timeEnd('timeA')
console.time('timeB')
console.timeEnd('timeB')
const obj = {
  name: 'Woong',
  age: 43
}
console.log(obj)
console.info(obj)
console.dir(obj)
console.table(obj)
const arr = [1, 2, 3, 4, 5]

console.log(arr)
console.info(arr)
console.dir(arr)
console.table(arr)
</script>
