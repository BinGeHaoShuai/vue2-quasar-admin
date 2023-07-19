# vue2-quasar-admin
基于 vue2 和 quasar 实现的后台管理系统
## 前端工程模板（project-name）

### 修改项目信息（删除该节）

删除 `src` 目录下的示例文件：

- `api`
  - `dashboard.js`
- `pages`
  - `Dashboard.vue`
- `store`
  - `dashboard.js`
  - `global_config.js`

修改示例数据：

- `layouts`
  - `MainLayout.vue`
- `route`
  - `routes.js:20`
- `store`
  - `index.js:19`
  - `index.js:25`

除通用组件，工具方法外的其他文件请根据具体业务需求修改

### 基本环境搭建

```bash

# Install nodejs v12.22.12 if using nvm
nvm install 12.22.12
nvm use 12.22.12# Configure git
git config core.autocrlf input
git config core.safecrlf true
git config pull.rebase true
# Configure npm registry
npm config set registry=https://registry.npmmirror.com/
npm config set sass_binary_site=https://registry.npmmirror.com/-/binary/node-sass
# Install quasar/cli
npm install -g @quasar/cli@1.4.0
```
