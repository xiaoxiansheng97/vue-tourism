<template>
  <div>
    <el-form v-if="!isReg">
      <div class="title">用户名：</div>
      <el-input v-model.trim="name" placeholder="请输入用户名"></el-input>
      
      
      <div class="title">密码：</div>
      <el-input v-model.trim="password" placeholder="请输入密码" show-password></el-input>
      <div class="element-button">
      <el-button type="primary" @click="login()">登录</el-button>
      <el-button @click="reg()">注册</el-button></div>
    </el-form>
    <form v-else>
      <div class="title">用户名：</div>
      <el-input v-model.trim="name" placeholder="请输入用户名"></el-input>
      <br />
      <div class="title">密码：</div>
      <el-input v-model.trim="password" placeholder="请输入密码" show-password></el-input>
      <div class="title">再次输入密码：</div>
      <el-input v-model.trim="repeat" placeholder="请再次输入密码" show-password></el-input>
      <div class="element-button"><el-button type="success" icon="el-icon-check" @click="addUser()" circle></el-button>
      <el-button type="danger" icon="el-icon-back" @click="cancel()" circle></el-button></div>
      
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      isReg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login() {
      if (this.name == '' && this.password == '') {
        alert("用户名密码未填");
      } else if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
        this.$router.push('/home')
        this.name = ''
        this.password = ''
      } else {
        alert("用户名密码错误");
      }

    },
    reg() {
      this.name = ''
      this.password = ''
      this.isReg = true
    },
    cancel() {
      this.name = ''
      this.password = ''
      this.repeat = ''
      this.isReg = false
    },
    addUser() {
      if (this.name == '') {
        alert("用户名不能为空！")
      } else if (this.password == '' && this.repeat == '') {
        alert("密码不能为空！")
      } else if (this.password == this.repeat) {
        localStorage.setItem("name", this.name)
        localStorage.setItem("password", this.password)
        this.name = ''
        this.password = ''
        this.repeat = ''
        this.isReg = false
      } else {
        alert("两次输入不一致")
      }
    }
  }
}

</script>
<style lang="stylus" scoped>
  .title
    padding:.3rem 0
    text-align:center
  .element-button
    width:100%
    text-align:center
    padding:.3rem 0
</style>
