<template>
  <q-drawer
    show-if-above
    behavior="desktop"
    bordered
    content-class="bg-grey-1"
    :width="240"
    :value="true"
    :mini="mini"
  >
    <q-scroll-area
      class="fit"
      :bar-style="{cursor: 'default'}"
      :thumb-style="{cursor: 'default'}"
    >
      <q-list>
        <template v-for="menuItem in menuList">
          <menu-item
            :key="menuItem.id"
            :menu-item="menuItem"
          />
        </template>
      </q-list>
    </q-scroll-area>

    <template #mini>
      <q-scroll-area class="fit">
        <div class="q-py-sm column">
          <template v-for="menuItem in menuList">
            <menu-item
              :key="menuItem.id"
              mini
              :menu-item="menuItem"
            />
          </template>
        </div>
      </q-scroll-area>
    </template>
  </q-drawer>
</template>

<script>
import { cloneDeep, isEmpty } from 'lodash-es'
import MenuItem from './MenuItem.vue'

export default {
  name: 'MenuLink',
  components: { MenuItem },
  props: {
    menu: { type: Array, required: true },
    mini: { type: Boolean, default: false }
  },
  computed: {
    menuList() {
      return this.sortMenu(this.menu)
    }
  },
  methods: {
    sortMenu(menuList) {
      let menuListLocal = isEmpty(menuList) ? [] : cloneDeep(menuList)
      menuListLocal = menuListLocal.filter(item => !item.isHide)
      menuListLocal.sort(this.compareByKey('orderSort'))
      for (const menuItem of menuListLocal) {
        if (menuItem.children) {
          menuItem.children = this.sortMenu(menuItem.children)
        }
      }
      return menuListLocal
    },
    compareByKey(key) {
      return (m, n) => {
        const a = m[key]
        const b = n[key]
        return a - b
      }
    },
    isEmpty
  }
}
</script>
