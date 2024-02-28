<template>
  <div class="container">
<!--    <header>-->
<!--      <h1>언제쉬지?</h1>-->
<!--    </header>-->
    <div class="time-container">
      <div class="holiday-box">
        <div class="time-box">
          <p class="year">2023년</p>
          <p class="date">8월 15일</p>
        </div>
        <div class="line-box">
          <div class="line"></div>
          <div class="line-icon">😍</div>
          <div class="line"></div>
        </div>
        <div class="desc-box">
          <p>하루만 더 출근하면...</p>
          <h2>광복절</h2>
        </div>
      </div>
      <div class="holiday-box">
        <div class="time-box">
          <p class="year">2023년</p>
          <p class="date">8월 15일</p>
        </div>
        <div class="line-box">
          <div class="line"></div>
          <div class="line-icon">😍</div>
          <div class="line"></div>
        </div>
        <div class="desc-box">
          <p>하루만 더 출근하면...</p>
          <h2>광복절</h2>
        </div>
      </div>
      <div class="holiday-box">
        <div class="time-box">
          <p class="year">2023년</p>
          <p class="date">8월 15일</p>
        </div>
        <div class="line-box">
          <div class="line"></div>
          <div class="line-icon">😍</div>
          <div class="line"></div>
        </div>
        <div class="desc-box">
          <p>하루만 더 출근하면...</p>
          <h2>광복절</h2>
        </div>
      </div>
    </div>
<!--    -->
<!--&lt;!&ndash;    <div class="date-box aug">&ndash;&gt;-->
<!--&lt;!&ndash;      <h2>2023년 8월</h2>&ndash;&gt;-->
<!--&lt;!&ndash;      <p>어디가지?</p>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div class="rest-box">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>😽</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>4일만 더 출근하면..</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="rest-box holiday">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>😻</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>8월 15일(화) 광복절</h2>-->
<!--        <p>월요일에 연차를 쓴다면?? 🤭</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="rest-box">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>🙀</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>다음 쉬는날까진 23일 출근해야..</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--&lt;!&ndash;    <div class="date-box sept">&ndash;&gt;-->
<!--&lt;!&ndash;      2023년 9월&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div class="rest-box holiday">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>😻</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>9월 28일 ~ 30일 추석연휴</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="rest-box">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>😼</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>하루만 더 출근하면.. 연차쓰면 개꿀😍</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="rest-box holiday">-->
<!--      <div class="line-box">-->
<!--        <div class="vertical-hr"></div>-->
<!--        <p>😻</p>-->
<!--        <div class="vertical-hr h30"></div>-->
<!--      </div>-->
<!--      <div class="desc-box">-->
<!--        <h2>10월 3일 개천절</h2>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log(registration);
    })
  })
}
definePageMeta({
  layout: 'mobile'
})
const date = [
  {
    year: '2023년',
    date: '8월 15일',
    icon: 'heart',
    desc: '하루만 더 출근하면..'
  },
  {
    year: '2023년',
    date: '8월 15일',
    icon: 'heart',
    desc: '하루만 더 출근하면..'
  }
]
const today = new Date();
const oneDayTime = 86400000;
console.log(today.toUTCString())
console.log(today.getTime())
const tomorrow = new Date(today.getTime() + oneDayTime)

console.log(tomorrow.toUTCString())
const getDate = () => {

}
</script>

<style scoped>
.container {
  padding-top: 10px;
  color: #303030;
}
header {
  position: fixed;
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.holiday-box {
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  //border: 1px solid gray;
}
.time-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
}
.time-box .year {
  font-size: 13px;
}
.time-box .date {
  font-size: 15px;
}
.line-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
}
.line-box .line {
  width: 1px;
  height: 100%;
  background-color: #303030;
}
.line-box .line-icon {
  margin: 2px 0;
}
.desc-box {
  border: 1px solid grey;
  padding: 10px;
  width: 100%;
  margin: 10px 0 10px 10px;
}
</style>
