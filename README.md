# vue2-quasar-admin
基于 vue2 和 quasar 实现的后台管理系统
## 前端工程模板（project-name）

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
#start project
npm install
quasar dev
```
