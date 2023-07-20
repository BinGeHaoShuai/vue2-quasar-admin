<template>
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>
            Vue2 Quasar Admin
          </q-toolbar-title>

          <q-tabs
            v-model="tab"
            inline-label
            class="text-white"
          >
            <q-tab name="mails" label="组织" />
            <q-tab name="alarms" label="用户" />
            <q-tab name="movies" label="角色" />
          </q-tabs>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'MainLayoutOnlyHeadTab',
  data() {
    return {
      tab: 'mails'
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
