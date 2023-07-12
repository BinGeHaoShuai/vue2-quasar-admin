<template>
  <q-btn
    v-if="mini"
    :id="menuItem.id"
    :key="menuItem.id"
    flat
    dense
    square
    class="mini-icon q-py-sm"
    :to="isRoute(menuItem) ? menuItem.path : ''"
  >
    <q-icon
      :name="menuItem.icon"
      size="sm"
      :color="`${menuActivate(menuItem) ? 'primary' : ''}`"
    />
    <q-tooltip
      v-if="!menuVisible[menuItem.id]"
      anchor="center right"
      self="center start"
    >
      {{ menuItem.name }}
    </q-tooltip>
    <mini-menu-item
      :show.sync="menuVisible[menuItem.id]"
      :menu-item="menuItem"
    />
    <!--    <q-menu-->
    <!--      v-model="menuVisible[menuItem.id]"-->
    <!--      content-class="mini-menu"-->
    <!--      anchor="top right"-->
    <!--      self="top left"-->
    <!--    >-->
    <!--      <template v-for="menuChild in menuItem.children">-->
    <!--        <q-item-->
    <!--          :key="menuChild.id"-->
    <!--          clickable-->
    <!--          :to="isRoute(menuChild) ? menuChild.path : ''"-->
    <!--        >-->
    <!--          <q-item-section>{{ menuChild.name }}</q-item-section>-->
    <!--        </q-item>-->
    <!--      </template>-->
    <!--    </q-menu>-->
  </q-btn>
  <q-expansion-item
    v-else
    class="menu"
    :hide-expand-icon="isRoute(menuItem)"
    :header-inset-level="inset"
    :to="isRoute(menuItem) ? menuItem.path : ''"
    :value="menuActivate(menuItem)"
  >
    <template #header>
      <q-item-section>
        <div class="flex items-center no-wrap">
          <q-icon
            :name="menuItem.icon"
            class="q-mr-sm"
            size="sm"
          />
          <span>{{ menuItem.name }}</span>
        </div>
      </q-item-section>
    </template>
    <template v-for="menuChild in menuItem.children">
      <menu-item
        :key="menuChild.id"
        :menu-item="menuChild"
        :inset="inset + insetStep"
      />
    </template>
  </q-expansion-item>
</template>

<script>
import { isRoute } from 'src/router/routes'
import { isEmpty } from 'lodash-es'
import MiniMenuItem from 'components/MenuLink/MiniMenuItem'

export default {
  name: 'MenuItem',
  components: { MiniMenuItem },
  props: {
    mini: { type: Boolean, default: false },
    menuItem: { type: Object, required: true },
    inset: { type: Number, default: 0 },
    insetStep: { type: Number, default: 0.3 }
  },
  data() {
    return {
      menuVisible: {}
    }
  },
  methods: {
    menuActivate(menu) {
      if (!isEmpty(menu.path)) {
        const routePath = menu.path
        return routePath === this.$route.path
      }
      if (!isEmpty(menu.children)) {
        for (const menuChild of menu.children) {
          if (this.menuActivate(menuChild)) {
            return true
          }
        }
      }
      return false
    },
    isEmpty,
    isRoute
  }
}
</script>

<style lang="scss" scoped>
.menu {
  overflow: hidden;
}
</style>
