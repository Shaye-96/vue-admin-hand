<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="menu" class="menu" />
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img class="image pull-left" src="@/assets/images/header.jpg" alt="头像" />
        <p class="pull-left">{{userName}}</p>
      </div>
      <div class="header-icon pull-left" @click="exit">
        <svg-icon iconClass="logout" class="logout" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {};
  },
  computed: {
    userName() {
      console.log(this.$store.state.login.userName);
      return this.$store.state.login.userName;
    }
  },
  methods: {
    navMenuState() {
      //  this.$store.dispatch('setMenuStatus',{"name": "Shaye"}) //  对象用JSON字符串的形式传值
      this.$store.commit("config/SET_COLLAPSE");
    },
    // 退出
    exit() {
      this.$msBox
        .confirm("是否退出登录？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          this.$store.dispatch("login/exit").then(
            this.$router.push({
              name: "Login"
            }),
            this.$message({
              type: "success",
              message: "退出成功!"
            })
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
      // this.$store.dispatch('login/exit').then(
      //   this.$router.push({
      //     name: "Login"
      //   })
      // )
    }
  }
};
</script>

<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  height: 75px;
  background: #ffffff;
  line-height: 75px;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
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
    margin-top: 5%;
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