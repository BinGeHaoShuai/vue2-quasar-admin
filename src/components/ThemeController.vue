<template>
  <div class="inline-block">
    <q-btn
      flat
      @click="onControllerBtnClick"
    >
      <q-icon
        name="palette"
        size="sm"
      />
    </q-btn>
    <q-dialog
      persistent
      :value="show"
      @hide="onDialogHide"
    >
      <q-card class="dialog-card">
        <q-card-section>
          <div class="h6-vertical-bar">
            <span class="text-h6 q-pl-md">选择主题</span>
          </div>
        </q-card-section>
        <q-card-section>
          <q-radio
            v-for="(themeItem, themeName) in themeMap"
            :key="themeName"
            v-model="currentTheme"
            :label="themeItem.name"
            :val="themeName"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            v-close-popup
            class="text-pbg"
            color="primary"
            icon="save"
            label="保存"
            @click="onSaveBtnClick"
          />
          <q-btn
            v-close-popup
            icon="cancel"
            label="取消"
            @click="onCancelBtnClick"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { colors } from 'quasar'
// Ver: 1.4
// Last Update: 2023/02/15
// 功能性修改请及时更新版本号并修改注释

const quasarThemeNameList = ['primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning']
const themeStorageKey = 'theme-project-name'
// 基于 var() 方法获取的 scss 变量值无法使用 mix() 或其他方法调整，直接在色值中设置透明度
// 主题配置逻辑中有 HEX => RGB(A) 的转换，这里需要使用 7/9 位 RGB/RGBA HEX 色值
// th-primary 实际的颜色是通过 white 为底 + 透明度的叠加色，例如 #1976D288 + #FFFFFFFF = #85B6E7
const themeMap = {
  default: {
    'name': '琥珀黄',
    'primary': '#F99D35FF',
    'text-pbg': '#FFFFFFFF',
    'th-primary': '#F99D3588'
  },
  quasarblue: {
    'name': '深蓝色',
    'primary': '#1976D2FF',
    'text-pbg': '#FFFFFFFF',
    'th-primary': '#1976D288'
  },
  testred: {
    'name': '紫色',
    'primary': '#D981DEFF',
    'text-pbg': '#000000FF',
    'th-primary': '#D981DE66'
  }
}

export default {
  name: 'ThemeController',
  data() {
    return {
      show: false,
      currentTheme: '',
      themeMap
    }
  },
  watch: {
    currentTheme(val) {
      setTheme(val)
    }
  },
  mounted() {
    this.currentTheme = getTheme()
  },
  methods: {
    onControllerBtnClick() {
      this.show = true
    },
    onSaveBtnClick() {
      setTheme(this.currentTheme).save()
    },
    onCancelBtnClick() {
      this.currentTheme = getTheme()
    },
    onDialogHide() {
      this.show = false
    }
  }
}

export const setTheme = (theme) => {
  if (!theme || !themeMap[theme]) {
    theme = 'default'
  }

  for (const themeItemKey in themeMap[theme]) {
    if (themeItemKey !== 'name') {
      const themeItemVal = HEXtoRGBA(themeMap[theme][themeItemKey])
      if (quasarThemeNameList.includes(themeItemKey)) {
        colors.setBrand(themeItemKey, themeItemVal)
      }
      document.getElementsByTagName('body')[0].style.setProperty(`--${themeItemKey}`, themeItemVal)
    }
  }

  return {
    save: () => {
      localStorage.setItem(themeStorageKey, theme)
    }
  }
}

export const getTheme = () => {
  return localStorage.getItem(themeStorageKey)
}

const HEXtoRGBA = (hex) => {
  const rgbaObj = colors.hexToRgb(hex)
  return `rgba(${rgbaObj.r}, ${rgbaObj.g}, ${rgbaObj.b}, ${rgbaObj.a ? rgbaObj.a / 100 : 1})`
}
</script>

<style lang="scss" scoped>
.dialog-card {
  width: 700px;
  max-width: 80vw;
}
</style>
