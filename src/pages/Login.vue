<template>
  <div class="login-background">
    <q-card class="login-card q-pa-lg">
      <div class="login-form">
        <p class="title">Vue2-Quasar-Admin</p>
          <div class="login-input-panel">
            <q-input
              v-model="user.name"
              outlined
              label="username"
            />
            <q-input
              v-model="user.pwd"
              outlined
              label="password"
            />
          </div>
        <div class="login-option">
          <q-checkbox
            v-model="isAutoLogin"
            label="下次自动登录"
          />
          <router-link to="/login">忘记密码？</router-link>
        </div>
        <q-btn
          color="primary"
          label="登录"
          class="login-btn"
          @click="login"
        />
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        pwd: ''
      },
      isAutoLogin: false
    }
  },
  methods: {
    login() {
      this.$router.push({ name: 'userManage' })
    }
  }
}
</script>
<style lang="scss">
.login-card {
  display: flex;
  justify-content: center;
  width: 500px;
  margin: 0 60%;
  border-radius: 10px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}
.login-option {
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 320px;
}
.login-form{
  padding: 30px;
  text-align: center;
}
.login-background {
  background: #fff url("../assets/img/black-small.jpg") no-repeat fixed;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
}
.login-input-panel{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  margin-bottom: 20px;
}
.login-btn{
  display: block;
  width: 320px;
}
</style>
