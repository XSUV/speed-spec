# `commitlint-config-speed`

支持配套的 [commitlint 配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 `git commit message` 进行校验。

## 安装

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install commitlint-config-speed @commitlint/cli --save-dev

npm install husky@8 --save-dev

```

## 使用



在 `package.json`中集成本包:

```json
  "commitlint": {
    "extends": [
      "speed"
    ]
  }
```

或者可以使用命令行在 `package.json`中添加

```sh
  npm pkg set commitlint.extends=["speed"]
```

## 测试

```sh
   git commit -m "temp: 修改"
```

### `type-enum`

- `feat`：添加新功能（feature）。
- `fix`：修复 bug。
- `docs`：更新文档（例如：README、文档注释等）。
- `style`：对代码样式、格式进行调整，不涉及代码逻辑的更改。
- `test`：添加或修改测试代码。
- `refactor`：对代码进行重构，既不修复 bug 也不添加新功能。
- `chore`：其他修改（不在上述类型中的修改），杂七杂八的修改。
- `revert`：表示撤销之前的提交。
