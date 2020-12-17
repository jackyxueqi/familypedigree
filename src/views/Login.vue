<template>
  <div class="home">
    <div style="width: 100%; height: 400px;" />
    <div>
      <div style="color: #FFF; font-size: 18px;">
        用户:<input style="width: 300px; height: 40px; font-size: 18px;" v-model="userName" />
      </div>
      <div style="margin-top: 20px; color: #FFF; font-size: 18px;">
        密码:<input style="width: 300px; height: 40px; font-size: 18px;" v-model="password" />
      </div>

      <button style="width: 100px; height: 30px; margin-top: 20px;" @click="login">登录</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios({
          method:'post',
          url:'http://172.18.64.162:8888/tianbo-provider-user/user/login',
          data:{
            username: this.userName,
            password: this.password
          }
      }).then((response) =>{          //这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
      })
    }
  }
}
</script>
<style scoped="scoped">
  .home {
    width: 100%;
    height: 1000px;
    background-color: #001c3a;
    position: relative;
  }
</style>
