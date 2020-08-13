<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState"><svg-icon iconClass="menu" className="menu"/></div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img class="image pull-left" src="@/assets/images/header.jpg" alt="头像">
        <p class="pull-left">管理员</p>
      </div>      
      <div class="header-icon pull-left"><svg-icon iconClass="logout" className="logout"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      
    }
  },
  methods: {
    navMenuState() {
      //  this.$store.dispatch('setMenuStatus',{"name": "Shaye"}) //  对象用JSON字符串的形式传值
      this.$store.commit('config/SET_COLLAPSE')
    }
  }
}
</script>

<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  height: 75px;
  background: #ffffff;
  line-height: 75px;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, .1));
  @include webkit(transition, all .3s ease 0s);
}
.header-icon {
  padding: 0 32px;
  color: #333333;
  svg {
    margin-bottom: -8px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  position: relative;
  height: 100%;
  border-right: 1px solid #ededed;
  cursor: pointer;
  .image {
    margin-top: 8%;
    width: 50px;
    border-radius: 50%;
  }
  p {
    padding: 0 32px;
  }
  + .header-icon {
    padding: 0 28px;
  }
}
.open {
  #header-wrap {
    left: $navWidth;
  }
}
.close {
  #header-wrap {
    left: $navMiniWidth;
  }
}
</style>