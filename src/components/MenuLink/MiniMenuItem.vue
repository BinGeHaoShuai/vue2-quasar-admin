<template>
  <q-menu
    :value="!!show"
    content-class="mini-menu"
    anchor="top right"
    self="top left"
    @input="val => $emit('update:show', val)"
  >
    <template v-for="menuChild in menuItem.children">
      <q-item
        :key="menuChild.id"
        clickable
        :to="isRoute(menuChild) ? menuChild.path : ''"
      >
        <q-item-section>{{ menuChild.name }}</q-item-section>
      </q-item>
    </template>
  </q-menu>
</template>

<script>
import { isRoute } from 'src/router/routes'
// TODO：暂未实现递归

export default {
  name: 'MiniMenuItem',
  props: {
    show: { type: Boolean | undefined, required: true },
    menuItem: { type: Object, required: true }
  },
  emits: ['update:show'],
  methods: {
    isRoute
  }
}
</script>

<style lang="scss" scoped>
.mini-menu {
  margin-left: 20px;
}
</style>
