<template>
  <div id="main-wrap">
    <router-view />
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
  left: $navWidth;
  border: 30px solid $main-backgroundColor;
  border-bottom: none;
}
</style>