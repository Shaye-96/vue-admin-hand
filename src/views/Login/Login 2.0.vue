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
        >{{ item.txt }}</li>
      </ul>

      <!-- Form Start -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        size="medium"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item prop="username">
          <label for="username">邮箱</label>
          <el-input id="username" type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="passwords" v-show="tabIndex === 1">
          <label for="passwords">重复密码</label>
          <el-input
            id="passwords"
            type="password"
            v-model="loginForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="chapter">
          <label for="“chapter">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input id="chapter" type="text" v-model="loginForm.chapter" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button
                class="block"
                type="success"
                :disabled="chapterBtnStatus.status"
                @click="getChapter"
              >{{!chapterBtnStatus.status ? chapterBtnStatus.txt : chapterBtnStatus.txt}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item class="form-btn">
          <el-button
            class="block"
            type="danger"
            :disabled="loginBtnStatus"
            @click="submitForm('loginForm')"
          >{{tabIndex === 1 ? "注册" : "登陆"}}</el-button>
        </el-form-item>
      </el-form>
      <!-- Form End -->
    </div>
  </div>
</template>

<script>
import { GetChapter, Login, Register } from "@/api/Login/login.js";
import {
  stripscript,
  checkEmial,
  checkPassword,
  checkChapter
} from "@/utils/validate.js";
export default {
  name: "login",
  data() {
    // eslint-disable-next-line prettier/prettier
    // 验证邮箱
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名！"));
      } else if (checkEmial(value)) {
        callback(new Error("邮箱格式不正确！"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      this.loginForm.password = stripscript(value);
      value = this.loginForm.password;
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else if (checkPassword(value)) {
        callback(new Error("密码为6-20位字母与数字的组合！"));
      }
      callback();
    };
    // 验证重复密码
    var validatePasswords = (rule, value, callback) => {
      if (this.tabIndex === 1) {
        callback();
      }
      this.loginForm.passwords = stripscript(value);
      value = this.loginForm.passwords;
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value !== this.loginForm.password) {
        this.loginForm.passwords = "";
        callback(new Error("输入错误，请重新输入！"));
      }
      callback();
    };
    // 验证验证码
    var validateChapter = (rule, value, callback) => {
      this.loginForm.chapter = stripscript(value);
      value = this.loginForm.chapter;
      const reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        callback(new Error("请输入验证码！"));
      } else if (checkChapter(value)) {
        callback(new Error("验证码格式不正确！"));
      }
      callback();
    };
    return {
      // 菜单Tab 数组
      mennuTab: [
        { id: 0, txt: "登录" },
        { id: 1, txt: "注册" }
      ],
      // 菜单切换标签
      tabIndex: 0,
      // 表单对象
      loginForm: {
        username: "",
        password: "",
        passwords: "",
        chapter: ""
      },
      // 验证规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        passwords: [{ validator: validatePasswords, trigger: "blur" }],
        chapter: [{ validator: validateChapter, trigger: "blur" }]
      },
      
      // 登陆 / 注册 按钮禁用状态
      loginBtnStatus: true,

      // 获取验证码 按钮 禁用状态
      chapterBtnStatus: {
        status: false,
        txt: "获取验证码"
      },

      // 倒计时
      timer: null
    }
  },
  methods: {
    // 更改获取验证码按钮状态
    updateChapterBtnStatus(params) {
      this.chapterBtnStatus.status = params.status;
      this.chapterBtnStatus.txt = params.txt;
    },

    // 重置form 表单
    resetLoginForm() {
      // 登录按钮禁用
      this.loginBtnStatus = true;
      // 重置表单
      this.refs.loginForm.resetFields();
    },

    // 切换 nav
    toggleMenu(val) {
      this.tabIndex = val;
      this.updateChapterBtnStatus({
        status: false,
        txt: "获取验证码"
      })
      clearInterval(this.timer)
      this.resetLoginForm()
    },

    // 倒计时
    countDown(number = 60) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        number--
        if (number === 0) {
          clearInterval(this.timer)
          this.updateChapterBtnStatus({
            status: false,
            txt: "重新获取"
          })
          return false
        }
        this.chapterBtnStatus.txt = `倒计时${number}`;
      }, 1000);
    },

    // 获取验证码
    getChapter() {
      if (!this.loginForm.username) {
        this.$message({
          showClose: true,
          message: "邮箱不可以为空！",
          type: "error"
        });
        return false;
      }
      if (!this.loginForm.password) {
        this.$message({
          showClose: true,
          message: "密码不可以为空！",
          type: "error"
        });
        return false;
      }
      // 请求接口数据
      const data = {
        username: this.loginForm.username,
        module: this.tabIndex.value == 0 ? "login" : "register"
      };
      // 获取验证码按钮禁用
      this.updateChapterBtnStatus({
        status: true,
        txt: "发送中"
      })
      // 请求接口--获取验证码
      GetChapter(data)
        .then(response => {
          // 接受请求成功信息
          this.$message({
            showClose: false,
            message: response.data.message,
            type: "success"
          })
          this.loginBtnStatus.value = !this.loginBtnStatus.value
          this.countDown()
        })
        .catch(error => {
          // 接受请求失败信息
          console.log(error);
        });
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = {
            username: this.loginForm.username,
            password: this.loginForm.password,
            code: this.loginForm.chapter
          }
          switch (this.tabIndex.value == 0 ? "login" : "register") {
            case "login":
              Login(data)
                .then(response => {
                  this.$message({
                    showClose: false,
                    message: response.data.message,
                    type: "success"
                  })
                  this.$router.push({
                    name: "Home"
                  })
                })
                .catch(error => {
                  console.log(error);
                })
              break;
            case "register":
              Register(data)
                .then(response => {
                  this.$message({
                    showClose: false,
                    message: response.data.message,
                    type: "success"
                  })
                  this.toggleMenu(0)
                })
                .catch(error => {
                  console.log(error);
                })
              break;
            default:
              break;
          }
        } else {
          this.$message({
            showClose: false,
            message: "表单信息不正确，请重新编辑",
            type: "danger"
          })
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
    padding-top: 19px;
  }
  .block {
    display: block;
    width: 100%;
  }
}
</style>
