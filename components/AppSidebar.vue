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
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-star.svg" alt="일반적인 별" width="20" height="20">Today
          </div>
          <div class="menu-badge-box">
            <span class="badge warning">1</span>
            <span class="badge">4</span>
          </div>
        </li>
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-calendar.svg" alt="일반적인 별" width="24" height="24">Upcoming
          </div>
          <div class="menu-badge-box hidden">
            <span class="badge">1</span>
            <span class="badge">4</span>
          </div>
        </li>
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-anytime.svg" alt="일반적인 별" width="24" height="24">Anytime
          </div>
          <div class="menu-badge-box hidden">
            <span class="badge">1</span>
            <span class="badge">4</span>
          </div>
        </li>
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-file.svg" alt="일반적인 별" width="24" height="24">Someday
          </div>
          <div class="menu-badge-box hidden">
            <span class="badge">1</span>
            <span class="badge">4</span>
          </div>
        </li>
      </ul>
      <ul>
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-book.svg" alt="일반적인 별" width="24" height="24">Logbook
          </div>
          <div class="menu-badge-box hidden">
            <span class="badge">1</span>
            <span class="badge">4</span>
          </div>
        </li>
        <li class="menu-item">
          <div class="item-title">
            <img src="@/assets/svg/icon-trash.svg" alt="일반적인 별" width="24" height="24">Trash
          </div>
          <div class="menu-badge-box hidden">
            <span class="badge">1</span>
            <span class="badge">4</span>
          </div>
        </li>
      </ul>
      <section>
      </section>
      <ul>
        <li>테스트</li>
        <li>프로젝트</li>
      </ul>
    </section>
    <footer>
      <button>
        + New List
      </button>
      <button>
        <img src="@/assets/svg/icon-setting.svg" alt="일반적인 별" width="24" height="24">
      </button>
    </footer>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar"
}
</script>

<style scoped>
.default-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 180px;
  background-color: #272626;
  color: #ffffff;
  border-right: 1px solid black;
}
.default-sidebar > header, footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 20px;
}
footer > button {
  outline: 0;
  background-color: #272626;
  color: #dddddd;
  border-radius: 3px;
  border: 1px solid #272626;
  padding: 5px 10px;
  cursor: pointer;
}
footer > button:hover {
  border: 1px solid #dddddd;
}
.default-sidebar > section {
  display: flex;
  flex: 1;
  padding: 20px;
}
.menu-wrapper {
  display: flex;
  flex-direction: column
}
.menu-item {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-title > *:first-child {
  margin-right: 5px;
}
</style>
