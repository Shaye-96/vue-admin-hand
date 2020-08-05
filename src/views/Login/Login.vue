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
      <!-- Form Start -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        size="medium"
        ref="ruleForm"
        class="login-form"
      >
        <el-form-item prop="username">
          <label for="">邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label for="">密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="chapter">
          <label for="">验证码</label>
          <el-row gutter="10">
            <el-col :span="15">
              <el-input
                type="text"
                v-model="ruleForm.chapter"
                autocomplete="off"
              ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button class="block" type="success" @click="getChapter">
                获取验证码
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button
            class="block"
            type="danger"
            @click="submitForm('ruleForm')"
          >
            提交
          </el-button>
        </el-form-item>
      </el-form>
      <!-- Form End -->
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    // eslint-disable-next-line prettier/prettier
    // 验证邮箱
    var validateUsername = (rule, value, callback) => {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === "") {
        callback(new Error("请输入用户名！"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱格式不正确！"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // 验证验证码
    var validateChapter = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      mennuTab: [
        { id: 0, txt: "登录" },
        { id: 1, txt: "注册" }
      ],
      tabIndex: 0,
      ruleForm: {
        username: "",
        password: "",
        chapter: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        chapter: [{ validator: validateChapter, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 切换 nav
    toggleMenu(val) {
      this.tabIndex = val;
    },
    // 获取验证码
    getChapter() {
      console.log("获取验证码");
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  // margin: auto;
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
.login-form {
  margin-top: 29px;
  label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px;
  }
  .el-form-item {
    margin-bottom: 13px;
  }
  .form-btn {
    margin-top: 19px;
  }
  .block {
    display: block;
    width: 100%;
  }
}
</style>
