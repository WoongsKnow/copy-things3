<template>
  <aside class="default-sidebar">
<!--    <header>-->
<!--      사이드바 해더-->
<!--    </header>-->
    <section class="menu-wrapper">
      <header>
        Inbox
      </header>
      <ul>
        <li class="menu-item menu-line">Inbox</li>
        <li class="menu-item">Upcoming</li>
        <li class="menu-item">Anytime</li>
        <li class="menu-item menu-line">Someday</li>
        <li class="menu-item">Logbook</li>
        <li class="menu-item">trash</li>
      </ul>
      <section>
<!--TODO 테스트-->
      </section>
      <ul>
        <li>테스트</li>
        <li>프로젝트</li>
      </ul>
    </section>
    <footer>
      사이드바 푸터
    </footer>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar"
}
</script>

<style scoped>
.menu-wrapper {
  display: flex;
  flex-direction: column
}
.menu-item {
  margin: 10px 0;
}
.menu-line {
  margin-bottom: 20px;
}
</style>
