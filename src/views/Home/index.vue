<template>
  <div :class="[navStatu ? 'close' : 'open']">
    <LayoutHeader />>
    <LayoutNav />
    <LayoutMain />
  </div>
</template>

<script>
import LayoutHeader from "./Components/Header";
import LayoutNav from "./Components/Nav";
import LayoutMain from "./Components/Main";
export default {
  name: "layOut",
  data() {
    return {};
  },
  computed: {
    navStatu() {
      return this.$store.state.config.isCollapse
    }
  },
  components: {
    LayoutHeader,
    LayoutNav,
    LayoutMain
  }
};
</script>

<style lang="scss" scoped>
</style>