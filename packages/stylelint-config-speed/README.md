# stylelint-config-speed

[stylelint 更多配置](https://stylelint.io/user-guide/configure)。

## 安装

```sh
npm install stylelint-config-speed stylelint  --save-dev
```

## 使用

新建 `stylelint.config.js` 文件，并写入以下内容

```js
  module.exports = {
    extends: 'stylelint-config-speed',
    rules: {}
  };
```

```json

  "scripts": {
    "lint:stylelint": "stylelint src/**/*.{html,vue,css,sass,scss,less} -f unix --fix",
  },
```
