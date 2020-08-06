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
        :model="ruleForm"
        status-icon
        :rules="rules"
        size="medium"
        ref="ruleForm"
        class="login-form"
      >
        <el-form-item prop="username">
          <label for>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label for>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-show="tabIndex === 1">
          <label for>重复密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="chapter">
          <label for>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input type="text" v-model="ruleForm.chapter" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button class="block" type="success" @click="getChapter">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button class="block" type="danger" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
      <!-- Form End -->
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "@vue/composition-api";
import {
  stripscript,
  checkEmial,
  checkPassword,
  checkChapter
} from "@/utils/validate.js";
export default {
  name: "login",
  setup(props, context) {
    /**
     * 验证规则（放到开头）
     */
    // 验证邮箱
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名！"));
      } else if (checkEmial(value)) {
        callback(new Error("邮箱格式不正确！"));
      } else {
        callback();
      }
    };
    // 验证密码
    const validatePassword = (rule, value, callback) => {
      ruleForm.password = stripscript(value);
      value = ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else if (checkPassword(value)) {
        callback(new Error("密码为6-20位字母与数字的组合！"));
      }
      callback();
    };
    // 验证重复密码
    const validatePasswords = (rule, value, callback) => {
      if (tabIndex.value === 1) {
        callback();
      }
      ruleForm.passwords = stripscript(value);
      value = ruleForm.passwords;
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value !== ruleForm.password) {
        ruleForm.passwords = "";
        callback(new Error("输入错误，请重新输入！"));
      }
      callback();
    };
    // 验证验证码
    var validateChapter = (rule, value, callback) => {
      ruleForm.chapter = stripscript(value);
      value = ruleForm.chapter;
      const reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        callback(new Error("请输入验证码！"));
      } else if (checkChapter(value)) {
        callback(new Error("验证码格式不正确！"));
      }
      callback();
    };

    /**
     * 声明数据
     */
    // 菜单Tab 数组
    const mennuTab = reactive([
      { id: 0, txt: "登录" },
      { id: 1, txt: "注册" }
    ]);
    // 菜单切换标签
    const tabIndex = ref(0);
    // 表单绑定数据
    const ruleForm = reactive({
      username: "",
      password: "",
      passwords: "",
      chapter: ""
    });

    // 表单验证
    const rules = reactive({
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      passwords: [{ validator: validatePasswords, trigger: "blur" }],
      chapter: [{ validator: validateChapter, trigger: "blur" }]
    });

    /**
     * 声明函数
     */
    // 切换 nav
    const toggleMenu = val => {
      tabIndex.value = val;
    };
    // 获取验证码
    const getChapter = () => {
      console.log("获取验证码");
    };
    // 提交表单
    const submitForm = formName => {
      context.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    /**
     * 生命周期
     */
    onMounted(() => {});
    return {
      // data
      mennuTab,
      tabIndex,
      ruleForm,
      rules,
      // methods
      toggleMenu,
      getChapter,
      submitForm
    };
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
