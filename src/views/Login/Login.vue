/* eslint-disable prettier/prettier */
<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="tabIndex === index ? 'current' : ''"
          v-for="(item, index) in mennuTab"
          :key="item.id"
          @click="toggleMenu(index)"
        >
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    // eslint-disable-next-line prettier/prettier
    return {
      mennuTab: [
        { id: 0, txt: "登录" },
        { id: 1, txt: "注册" }
      ],
      tabIndex: 0
    };
  },
  methods: {
    toggleMenu(val) {
      this.tabIndex = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
