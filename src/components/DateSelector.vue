<template>
  <div>
    <div class="flex items-center no-wrap">
      <el-date-picker
        ref="datetimeRef"
        popper-class="el-date-picker-hide-footer el-popper-on-quasar-dialog"
        :class="{fit: fit, 'validate-failed-border': validateFailed}"
        :value="datetime"
        :type="type"
        :disabled="disabled"
        :editable="editable"
        :clearable="clearable"
        :default-time="defaultTime"
        :value-format="valueFormat"
        :picker-options="{...pickerOptions}"
        @input="onDatetimeInput"
      />
      <template v-if="range">
        <span class="q-mx-sm">{{ rangeSeparator }}</span>
        <el-date-picker
          ref="datetimeEndRef"
          popper-class="el-date-picker-hide-footer el-popper-on-quasar-dialog"
          :class="{fit: fit}"
          :value="datetimeEnd"
          :type="type"
          :disabled="disabled"
          :editable="editable"
          :clearable="clearable"
          :default-time="defaultTime"
          :value-format="valueFormat"
          :picker-options="{disabledDate: endDatetimeDisableDate, ...pickerOptionsEnd}"
          @input="onDatetimeEndInput"
        />
      </template>
    </div>
    <div
      v-if="!isEmpty(rules)"
      class="validate-message-container"
    >
      <div
        v-if="validateFailed"
        class="validate-message-text"
      >
        {{ validateMsg }}
      </div>
    </div>
  </div>
</template>

<script>

// Ver: 2.5
// Last Update: 2023/05/05
// 功能性修改请及时更新版本号并修改注释
// 2.1 以前版本基于 Quasar QInput QDate 组件实现日期选择器，基于 Element ElTimePicker 组件 实现日期选择器
// 2.1 及以后版本完全基于 Element ElDatePicker 组件实现日期/日期时间选择器，封装 Quasar 风格的校验规则和方法

import { isDate, isEmpty } from 'lodash-es'
import { getDateObj, getNextDaysDateObj } from 'src/utils/DateTime'

export default {
  name: 'DateSelector',
  props: {
    // 选择器模式
    type: { type: 'year' | 'month' | 'week' | 'date' | 'datetime', default: 'date' },
    // 区间选择
    range: { type: Boolean, default: false },
    // 区间选择分隔符
    rangeSeparator: { type: String, default: '~' },
    // 默认时间
    defaultTime: { type: String, default: '' },
    // 显示格式
    // https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi
    format: { type: String, default: '' },
    // 绑定值格式
    // https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi
    valueFormat: { type: String, default: '' },
    // （开始）日期（时间）
    datetime: { type: String | Date, required: true },
    // 结束日期（时间）
    datetimeEnd: { type: String | Date, default: '' },
    // （开始）选择器选项
    // https://element.eleme.cn/#/zh-CN/component/date-picker#picker-options
    pickerOptions: { type: Object, default: () => {} },
    // 结束选择器选项
    // https://element.eleme.cn/#/zh-CN/component/date-picker#picker-options
    pickerOptionsEnd: { type: Object, default: () => {} },
    // 禁用
    disabled: { type: Boolean, default: false },
    // 允许手动输入
    editable: { type: Boolean, default: true },
    // 显示清空按钮
    clearable: { type: Boolean, default: false },
    // Quasar 风格校验规则
    rules: { type: Array, default: () => [] },
    // 自适应行宽度
    fit: { type: Boolean, default: false },
    // 强制结束日期（时间）晚于开始日期（时间）
    endAfterStart: { type: Boolean, default: false },
    // 强制结束日期（时间）等于或晚于开始日期（时间）
    endSameOrAfterStart: { type: Boolean, default: false }
  },
  emits: [
    'update:datetime',
    'update:datetimeEnd',
    'input',
    'inputEnd'
  ],
  data() {
    return {
      datetimeLocal: '',
      datetimeEndLocal: '',
      validateMsg: '',
      validateFailed: false
    }
  },
  computed: {},
  watch: {
    datetime: {
      handler(val) {
        this.datetimeLocal = val
      },
      immediate: true
    },
    datetimeEnd: {
      handler(val) {
        this.datetimeEndLocal = val
      },
      immediate: true
    }
  },
  methods: {
    onDatetimeInput(val) {
      this.datetimeLocal = this.datetimeIsEmpty(val) ? '' : val

      if (this.endSameOrAfterStart) {
        if (getDateObj(val).isAfter(getDateObj(this.datetimeEndLocal))) {
          this.onDatetimeEndInput(this.datetimeLocal)
        }
      } else if (this.endAfterStart) {
        if (getDateObj(val).isSameOrAfter(getNextDaysDateObj(1, getDateObj(this.datetimeEndLocal)))) {
          this.onDatetimeEndInput(this.datetimeLocal)
        }
      }

      this.$emit('update:datetime', this.datetimeLocal)
      this.$emit('input', this.datetimeLocal)
      this.validate()
    },
    onDatetimeEndInput(val) {
      this.datetimeEndLocal = this.datetimeIsEmpty(val) ? '' : val
      this.$emit('update:datetimeEnd', this.datetimeEndLocal)
      this.$emit('inputEnd', this.datetimeEndLocal)
      this.validate()
    },
    endDatetimeDisableDate(val) {
      if (this.endSameOrAfterStart) {
        return isEmpty(this.datetime) ? false : getDateObj(val).isBefore(getDateObj(this.datetime))
      } else if (this.endAfterStart) {
        return isEmpty(this.datetime) ? false : getDateObj(val).isSameOrBefore(getDateObj(this.datetime))
      }
      return false
    },
    // Quasar 风格校验方法
    validate() {
      for (const ruleItem of this.rules) {
        let validateResult
        validateResult = ruleItem(this.datetimeLocal)
        if (validateResult !== true) {
          this.validateMsg = validateResult
          this.validateFailed = true
          return false
        }
        if (this.range) {
          validateResult = ruleItem(this.datetimeEndLocal)
          if (validateResult !== true) {
            this.validateMsg = validateResult
            this.validateFailed = true
            return false
          }
        }
      }
      this.validateFailed = false
      return true
    },
    // Quasar 风格校验重置方法
    resetValidation() {
      this.validateMsg = this.$options.data().validateMsg
      this.validateFailed = this.$options.data().validateFailed
    },
    focus() {
      this.$refs.datetimeRef.focus()
    },
    datetimeIsEmpty(val) {
      if (isDate(val)) {
        return false
      }
      return isEmpty(val)
    },
    isEmpty
  }
}
</script>

<style lang="scss">
.el-popper-on-quasar-dialog {
  z-index: 6500 !important;
}

.el-date-picker-hide-footer {
  .el-picker-panel__footer {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.validate-message-container {
  padding: 8px 12px 0;
  height: 20px
}

.validate-message-text {
  font-size: 11px;
  color: $negative;
  height: 12px;
  line-height: 1
}

.validate-failed-border {
  border: 1px solid $negative;
  border-radius: 4px;
}
</style>
