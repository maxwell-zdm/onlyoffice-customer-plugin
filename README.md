# ONLYOFFICE Customer Plugin Test

这是一个用于测试绿联内置 ONLYOFFICE 是否可以加载自定义插件的最小项目。

## 文件结构

```text
config.json
customer-plugin/config.json
customer-plugin/index.html
customer-plugin/plugin.js
customer-plugin/styles.css
```

## GitHub Pages 设置

仓库页面进入：

```text
Settings → Pages → Build and deployment → Deploy from a branch
```

选择：

```text
Branch: main
Folder: /root
```

保存后等待部署完成。

## ONLYOFFICE Developer Mode 地址

GitHub Pages 启用后，在 ONLYOFFICE 插件管理器的 Developer Mode 填入：

```text
https://maxwell-zdm.github.io/onlyoffice-customer-plugin/config.json
```

如果这个地址不行，再试：

```text
https://maxwell-zdm.github.io/onlyoffice-customer-plugin/customer-plugin/config.json
```

## 当前测试内容

- 插件侧边栏能否加载
- JS 能否运行
- fetch 能否请求 GitHub API
- 能否写入测试文字到当前单元格
