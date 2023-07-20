<template>
  <div>
    <q-card class="login-card">
      Vue2-Quasar-Admin
      <q-card-section>
        <div>
          <q-input outlined v-model="user.name" label="username"/>
          <q-input outlined v-model="user.pwd" label="password"/>
        </div>
      </q-card-section>
      <div>
        <q-checkbox v-model="isAutoLogin" label="下次自动登录"/>
        <router-link to="/login">忘记密码？</router-link>
      </div>
      <q-btn color="primary" label="登录" class="login-btn"/>
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
  methods: {}
}
</script>
<style>
.login-card {
  width: 500px;
}
</style>
