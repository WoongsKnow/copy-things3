<template>
  <footer>
    <button>
      +
    </button>
    <button>
      <img src="@/assets/svg/icon-calendar.svg" alt="일반적인 별" width="24" height="24">
    </button>
    <button>
      <img src="@/assets/svg/icon-calendar.svg" alt="일반적인 별" width="24" height="24">
    </button>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
  /*border: 1px solid black;*/
  padding: 20px;
  overflow: hidden;
  background-color: #231A08;
}
button {
  width: 150px;
  height: 40px;
  background-color: #231A08;
  outline: 0;
  color: #dddddd;
  border-radius: 3px;
  border: 1px solid #231A08;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 0.5rem;
}
footer > button:hover {
  border: 0.01rem solid #dddddd;
}
</style>
