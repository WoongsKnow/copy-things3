<template>
  <div class="container">
<!--    <div class="date-box aug">-->
<!--      <h2>2023년 8월</h2>-->
<!--      <p>어디가지?</p>-->
<!--    </div>-->
    <div class="rest-box">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>😽</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>4일만 더 출근하면..</h2>
      </div>
    </div>
    <div class="rest-box holiday">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>😻</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>8월 15일(화) 광복절</h2>
        <p>월요일에 연차를 쓴다면?? 🤭</p>
      </div>
    </div>
    <div class="rest-box">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>🙀</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>다음 쉬는날까진 23일 출근해야..</h2>
      </div>
    </div>
<!--    <div class="date-box sept">-->
<!--      2023년 9월-->
<!--    </div>-->
    <div class="rest-box holiday">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>😻</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>9월 28일 ~ 30일 추석연휴</h2>
      </div>
    </div>
    <div class="rest-box">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>😼</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>하루만 더 출근하면.. 연차쓰면 개꿀😍</h2>
      </div>
    </div>
    <div class="rest-box holiday">
      <div class="line-box">
        <div class="vertical-hr"></div>
        <p>😻</p>
        <div class="vertical-hr h30"></div>
      </div>
      <div class="desc-box">
        <h2>10월 3일 개천절</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'mobile'
})

class Holyday {
  date: number;
}

const data = [
  {

  }
];


</script>

<style scoped>
.container {
  padding-top: 20px;
  color: #303030;
}
.date-box {
  background-color: #d9d9d9;
  padding: 10px 20px;
  color: #303030;
  height: 100px;
}
.date-box > h2 {
  font-size: 18px;
  font-weight: bold;
}
.rest-box {
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.line-box {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
}
.vertical-hr {
  width: 2px;
  height: 10px;
  background-color: #2691d9;
  margin: 5px 0;
}
.h30 {
  height: 30px;
}
.desc-box {
  margin-top: 10px;
  border-top: 1px solid #a6a6a6;
  padding: 10px;
  flex: 1;
}
.desc-box > h2 {
  font-weight: bold;
}
.aug {
  background-image: url('/assets/images/8월.jpg');
  background-position: center;
}
.sept {
  background-image: url('/assets/images/9월.jpeg');
  background-position: center;
}
</style>
