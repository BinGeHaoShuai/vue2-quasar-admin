<template>
  <div class="table-container">
    <div class="q-pa-md">
      <q-markup-table
        class="my-sticky-column-table"
        separator="cell"
      >
        <thead>
          <tr>
            <td class="text-left">
              <div>
                <span>用户</span>
                <q-btn
                  color="primary"
                  label="添加"
                />
                <q-btn
                  color="primary"
                  label="上传（.xlsx）"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th
              v-for="(title, key) in column"
              :key="key"
              class="text-left"
            >
              {{ title.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in userData"
            :key="user.id"
          >
            <template v-for="(item, key) in user">
              <td
                v-if="key !== 'id'"
                :key="key"
                class="text-left"
              >
                <q-toggle
                  v-if="isToggle(key)"
                  v-model="user[key]"
                />
                <div v-else>{{ item }}</div>
              </td>
            </template>
            <td class="text-left">
              <q-btn
                color="primary"
                label="编辑"
                @click="editorUser"
              />
              <q-btn
                color="red"
                label="删除"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>

<script>
const toggles = ['isOrganize', 'isOverall', 'isBan', 'isDelete']
const texts = ['team', 'apply', 'name', 'createTime', 'displayName', 'headshot', 'email', 'phone', 'workplace', 'county', 'tag']
export default {
  data() {
    return {
      column: [
        {
          name: 'team',
          label: '组织'
        }, {
          name: 'apply',
          label: '应用'
        }, {
          name: 'name',
          label: '名称'
        }, {
          name: 'createTime',
          label: '创建时间'
        }, {
          name: 'displayName',
          label: '显示名称'
        }, {
          name: 'headshot',
          label: '头像'
        }, {
          name: 'email',
          label: '电子邮箱'
        }, {
          name: 'phone',
          label: '手机号'
        }, {
          name: 'workplace',
          label: '工作单位'
        }, {
          name: 'county',
          label: '国家/地区'
        }, {
          name: 'tag',
          label: '标签'
        }, {
          name: 'isOrganize',
          label: '是组织管理员'
        }, {
          name: 'isOverall',
          label: '是全局管理员'
        }, {
          name: 'isBan',
          label: '被禁用'
        }, {
          name: 'isDelete',
          label: '被删除'
        }, {
          name: 'operation',
          label: '操作'
        }
      ],
      userData: [
        {
          id: 'test1',
          team: 'Frozen Yogurt',
          apply: 159,
          name: 6.0,
          createTime: 24,
          displayName: 4.0,
          headshot: 87,
          email: '14%',
          phone: '1%',
          workplace: 4.0,
          county: 87,
          tag: '14%',
          isOrganize: false,
          isOverall: false,
          isBan: false,
          isDelete: false
        }
      ]
    }
  },
  methods: {
    isToggle(type) {
      return toggles.includes(type)
    },
    isText(type) {
      return texts.includes(type)
    },
    editorUser(key) {
      this.$router.push({ name: 'userEditor' })
    }
  }
}
</script>

<style lang="scss">
.table-container {
  //border: #daf1ff solid 1px;
}

.my-sticky-column-table {
  min-width: 500px;

  thead th {
    /* bg color is important for th; just specify one */
    background-color: #e9e9e9
  }

  td:first-child, td:last-child {
    background-color: #ffffff
  }

  th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    z-index: 1
  }

  th:last-child,
  td:last-child {
    position: sticky;
    right: 0;
    z-index: 1
  }
}

</style>
