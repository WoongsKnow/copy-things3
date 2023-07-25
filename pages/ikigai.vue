<template>
<section class="ikigai-wrapper">
  <div class="circle like">

  </div>
  <div class="circle good">

  </div>
  <div class="circle social">

  </div>
  <div class="circle money">

  </div>
</section>
</template>

<script>
export default {
  name: "ikigai"
}
</script>

<style scoped>
.ikigai-wrapper {
  position: relative;
}
.circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
}
.like {
  left: 20px;
  background-color: rgba( 229, 127, 178, 0.5 );
}
.good {
  top: 150px;
  background-color: rgba( 127, 178, 229, 0.5 );
}
.social {
  top: 20px;
  left: 150px;
  background-color: rgba( 229, 178, 127, 0.5 );
}
.money {
  top: 150px;
  left: 150px;
  background-color: rgba( 127, 204, 127, 0.5 );
}
</style>
