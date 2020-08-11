<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in routes">
        <!-- el-submenu 的index 不能重复 且是 string 类型-->
        <el-submenu v-if="!item.hidden" :index="'' + index" :key="item.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <template v-if="item.children">
            <el-menu-item
              v-for="res in item.children"
              :key="res.id"
              :index="res.path"
            >{{res.meta.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navWidth;
  height: 100%;
  background: $main-color;
}
// 使用穿透更改被选中元素的背景色也可将其写入全局element.scss 样式中
.el-submenu {
  .el-menu-item {
    font-size: 14px;
  }
  & /deep/ .is-active {
    background-color: $nav-isactive !important;
  }
  &.is-active.is-opened /deep/ .el-submenu__title{
    background-color: rgba(245, 108, 108, .2) !important;
  }
}
</style>