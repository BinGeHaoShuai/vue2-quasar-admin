<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-pbg">
        <q-btn
          dense
          flat
          round
          aria-label="Menu"
          icon="menu"
          @click="onMenuMiniBtnClick"
        />
        <q-toolbar-title>
          <span>Project-Name</span>
        </q-toolbar-title>
        <div>
          <theme-controller class="q-mr-md"/>
        </div>
      </q-toolbar>
    </q-header>
    <menu-link
      :menu="menu"
      :mini="drawerMini"
    />
    <q-page-container class="page-container">
      <div class="q-px-sm tags-view">
        <scroll-pane
          ref="scrollPane"
          class="scroll-pane"
        >
          <q-chip
            v-for="page in keepAlivePages"
            :key="page.name"
            clickable
            removable
            square
            class="q-pr-md"
            :color="keepAlivePageActivate(page) ? 'primary' : ''"
            :text-color="keepAlivePageActivate(page) ? 'white' : ''"
            @click="onKeepAlivePageClick(page)"
            @remove="onKeepAlivePageClose(page)"
          >
            {{ page.label }}
          </q-chip>
        </scroll-pane>
      </div>
      <div class="container-main-top-space"/>
      <keep-alive :include="keepAlivePages.map(item => item.name)">
        <router-view/>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuLink from 'components/MenuLink/MenuLink'
import ThemeController, { getTheme, setTheme } from 'src/components/ThemeController'
import ScrollPane from 'src/components/ScrollPane'
import { clearCookies } from 'src/utils/Auth'
import { isEmpty, throttle } from 'lodash-es'
import { isRoute } from 'src/router/routes'
import { computed } from 'vue'

export default {
  name: 'MainLayout',
  components: {
    MenuLink,
    ThemeController,
    ScrollPane
  },
  provide() {
    return {
      $mainLayoutDrawerMini: computed(() => this.drawerMini)
    }
  },
  data() {
    return {
      // drawerMini 用于控制当前 menu 是否处于 mini 状态
      drawerMini: false,
      // drawerMode 记录手动控制的 mini 状态，用于在 breakpoint 中恢复
      drawerMode: false,
      // 记录上一次调整的宽度，用于判断是否处于同一 breakpoint
      lastWidth: 0
    }
  },
  computed: {
    menu() {
      return this.$store.getters['globalConfig/menu']
    },
    keepAlivePages() {
      return this.$store.getters['globalConfig/keepAlivePages']
    }
  },
  watch: {
    $route: {
      handler(val) {
        if (val.path === '/') {
          const firstRoute = this.getCurrentMenu(this.menu)
          if (!isEmpty(firstRoute)) {
            this.$router.push({ path: firstRoute.path })
          }
        } else {
          const currentMenu = this.getCurrentMenu(this.menu, val.path)
          this.$store.dispatch(
            'globalConfig/addKeepAlivePage',
            {
              name: val.name,
              label: currentMenu.name,
              path: val.path
            }
          )
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.checkWindowWidthForDrawer()
    window.addEventListener('resize', throttle(() => {
      this.checkWindowWidthForDrawer()
    }, 500))
  },
  beforeMount() {
    if (!getTheme()) {
      setTheme().save()
    }
  },
  methods: {
    logout() {
      clearCookies()
    },
    checkWindowWidthForDrawer() {
      const windowWidth = window.innerWidth
      if (this.lastWidth === 0) {
        this.lastWidth = windowWidth
      } else {
        if (windowWidth < 1024 && this.lastWidth >= 1024) {
          // 当前宽度小于 1024，并且上次大于 1024，说明界面正在缩小，触发 mini
          this.drawerMini = true
        } else if (windowWidth >= 1024 && this.lastWidth < 1024 && !this.drawerMode) {
          // 当前宽度大于 1024，上次小于 1024，说明界面正在拉伸
          // 如果上次手动操作了 “关闭 mini”，则自动关闭 mini
          this.drawerMini = false
        }
      }
      this.lastWidth = windowWidth
    },
    onMenuMiniBtnClick() {
      const currentMini = !this.drawerMini
      this.drawerMini = currentMini
      this.drawerMode = currentMini
    },
    onKeepAlivePageClick(page) {
      this.$router.push({ path: page.path })
    },
    onKeepAlivePageClose(page) {
      const pageIndex = this.keepAlivePages.findIndex(item => item.name === page.name)
      this.$store.dispatch('globalConfig/removeKeepAlivePage', page)
      if (this.keepAlivePageActivate(page)) {
        // let kap = this.keepAlivePages.filter(item => {
        //   return item.name !== page.name
        // })
        if (isEmpty(this.keepAlivePages)) {
          this.$router.push({ path: '/' })
        } else {
          this.onKeepAlivePageClick(this.keepAlivePages[pageIndex === 0 ? 0 : pageIndex - 1])
        }
      }
    },
    getCurrentMenu(menu, path = null) {
      let curMenu = null
      for (const menuItem of menu) {
        if (isRoute(menuItem) && (path === null || menuItem.path === path)) {
          curMenu = menuItem
          break
        }
        if (!isEmpty(menuItem.children)) {
          curMenu = this.getCurrentMenu(menuItem.children, path)
          if (curMenu !== null) {
            break
          }
        }
      }
      return curMenu
    },
    keepAlivePageActivate(page) {
      return page.name === this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
$tags-view-height: 46px;

.mainheader-logo {
  width: 32px;
}

.scroll-pane {
  height: 36px;
}

.container-main-top-space {
  height: $tags-view-height;
}

.tags-view {
  position: fixed;
  background-color: white;
  padding-top: ($tags-view-height - 36px) / 2;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
  top: 50px;
  width: 100%;
  z-index: 1;
}
</style>
