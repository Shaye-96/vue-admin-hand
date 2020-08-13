<template>
  <div id="nav-wrap">
    <img class="image" src="@/assets/logo.png" alt="logo" />
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
      router
    >
      <template v-for="(item, index) in routes">
        <!-- el-submenu 的index 不能重复 且是 string 类型-->
        <el-submenu v-if="!item.hidden" :index="'' + index" :key="item.id">
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
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
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return this.$store.state.config.isCollapse;
    }
  },
  mounted() {
    this.$store.commit("SET_COUNT", 200);
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: $main-color;
  @include webkit(transition, all 0.3s ease 0s);
  .image {
    margin: 25px auto 25px;
    // width: 92px;
  }
}
// 使用穿透更改被选中元素的背景色也可将其写入全局element.scss 样式中
.el-submenu {
  .el-menu-item {
    font-size: 14px;
  }
  & /deep/ .is-active {
    background-color: $nav-isactive !important;
  }
  &.is-active.is-opened /deep/ .el-submenu__title {
    background-color: rgba(245, 108, 108, 0.2) !important;
  }
}
svg {
  margin-right: 10px;
}
.open {
  #nav-wrap {
    width: $navWidth;
    .image {
      width: 92px;
    }
  }
}
.close {
  #nav-wrap {
    width: $navMiniWidth;
    .image {
      width: 50px;
    }
    .el-menu {
      .el-submenu {
        &.is-opened /deep/ .el-submenu__title {
          background-color: rgba(245, 108, 108, 0.2) !important;
        }
      }
    }
  }
}
.el-menu--vertical {
  .el-menu-item {
    background-color: $main-color !important;
    border-top: 1px solid $main-backgroundColor;
    &:first-of-type {
      border-top: none;
    }
  }
  .el-menu-item:hover {
    background-color: $nav-isactive !important;
  }
}
</style>