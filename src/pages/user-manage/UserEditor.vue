<template>
  <div>
    <div class="b-radius-solid-1">
      <div class="q-pa-md bg-grey-2">
        <span>编辑用户</span>
        <q-btn
          color="white"
          text-color="black"
          :disable="loading"
          label="保存"
          @click="addRow"
        />
        <q-btn
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="保存&退出"
          @click="removeRow"
        />
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>组织：</span>
          </div>
          <div class="col">
            <q-select
              class="input-h-1"
              v-model="user.team"
              outlined
              :options="options"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>ID：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
              disable
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>名称：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>显示名称：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>头像：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>用户类型：</span>
          </div>
          <div class="col">
            <q-select
              v-model="user.team"
              outlined
              :options="options"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>密码：</span>
          </div>
          <div class="col">
            <q-btn
              outline
              glossy
              unelevated
              color="grey-4"
              text-color="black"
              label="编辑密码"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>电子邮箱：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>手机号：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>国家地区：</span>
          </div>
          <div class="col">
            <q-select
              v-model="user.team"
              outlined
              :options="options"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>城市：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>地址：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>工作单位：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>职位：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>身份证类型：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>身份证号码：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>身份证照片：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>个人页面：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>自我介绍：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>标签：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>语言：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>性别：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>生日：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>教育：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>积分：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>Karma：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>排名：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>注册应用：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>群组：</span>
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="user.team"
              disable
            />
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>角色：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>权限：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>第三方登录：</span>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>是组织管理员：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>是全局管理员：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>被禁用：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>被删除：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>多因素认证：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>WebAuthn凭据：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div class="q-px-md q-pt-md">
        <div class="row items-center">
          <div class="col-1">
            <span>托管账户：</span>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <q-btn
        color="white"
        text-color="black"
        :disable="loading"
        label="保存"
        @click="addRow"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        :disable="loading"
        label="保存&退出"
        @click="removeRow"
      />
    </div>
  </div>
</template>

<script>

const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
export default {
  data() {
    return {
      options,
      loading: false,
      filter: '',
      rowCount: 10,
      user: {
        id: 'test1',
        team: 'Frozen Yogurt',
        apply: 159,
        name: 6.0,
        createTime: 24,
        displayName: 4.0,
        headshot: 87,
        userType: 'manage',
        password: '123456',
        email: '14%',
        phone: '1%',
        workplace: 4.0,
        address: '上海',
        county: 87,
        tag: '14%',
        isOrganize: false,
        isOverall: false,
        isBan: false,
        isDelete: false
      },
      data: [
        {
          id: 1,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          id: 2,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          id: 3,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          id: 4,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          id: 5,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          id: 6,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          id: 7,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          id: 8,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          id: 9,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          id: 10,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      original: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow() {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow() {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.b-radius-solid-1 {
  border-radius: 10px;
  border: $grey-4 1px solid;
  overflow: hidden;
}

.col-1 {
  min-width: 50px;
}

::v-deep .q-field--auto-height .q-field__native {
  min-height: 30px;
}

::v-deep .q-field--auto-height .q-field__control {
  min-height: 30px;
}

::v-deep .q-field__marginal {
  height: 30px;
}

::v-deep .q-field__control {
  height: 30px;
}
</style>
