<template>
  <div class="login-container">
    <el-form ref="form" :model="form" :rules="rules" class="login-form">
      <h3 class="login-title">"甲子云"管理服务中心</h3>
      <el-form-item label prop="username">
        <el-input v-model="form.username" placeholder="用户名" prefix-icon="iconfont icon-men"></el-input>
      </el-form-item>
      <el-form-item label prop="password">
        <el-input v-model="form.password" placeholder="密码" prefix-icon="iconfont icon-key" show-password @keyup.native.enter="submitForm('form')"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      rules: { //form 表单的验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "change"
          },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "focus"
          },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "change"
          },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) { //登录按钮的点击事件
      this.$refs[formName].validate(valid => {
        if (valid) { //表单校验通过
          this.$store.dispatch('Login',this.form).then(() =>{
            // console.log('试验成功啦')
            this.$router.push({path:'/'})
          })

        } else {
          return false;
        }
      });
    }
  },

  created() {}
};
</script>

<style lang='less'>
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;

.login-container {
  height: 100%;
  background-color: @bg;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-title {
    color: #fff;
    font-size: 30px;
  }
  .login-form {
    width: 520px;
    padding: 0 35px;
  }

  .iconfont {
    font-size: 20px;
  }
  .el-input__inner {
    padding-left: 45px;
    background-color: transparent;
    border: 0;
    border: 1px solid #fff;
    color: #fff;
  }
  .el-button {
    width: 100%;
  }
  h3 {
    margin: 10px 0;
  }
}
</style>
