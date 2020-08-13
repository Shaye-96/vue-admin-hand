<template>
  <div id="main-wrap">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#main-wrap {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 75px;
  padding: 30px;
  padding-bottom: 0;
  background-color: $main-backgroundColor;  
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all .3s ease 0s);
}
.container {
  background-color: #ffffff;
  height: 100%;
  padding: 30px;
}
.open {
  #main-wrap {
    left: $navWidth;
  }
}
.close {
  #main-wrap {
    left: $navMiniWidth;
  }
}
</style>