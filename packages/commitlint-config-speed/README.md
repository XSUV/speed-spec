# `commitlint-config-speed`

## 安装commitlint

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install commitlint-config-speed @commitlint/cli --save-dev
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

或者可以使用命令行在`package.json`中添加

```sh
  npm pkg set commitlint.extends=["speed"]
```

## 安装husky

如果还没有安装husky，需要提前安装，这里用的是`@8`版本

```sh
npm install husky@8 --save-dev
```

在scripts中添加`prepare`字段

```json
"scripts": {
  // ...
  "prepare": "husky install"
}
```

或者可以使用命令行在`package.json`中添加

```sh
npm pkg set scripts.prepare="husky install"
```

初始化husky

```sh
npm run prepare
```

初始化后，根目录应该有个.husky的文件夹
在下面新建一个文件`commit-msg`， 然后文件里填写以下内容

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"

```

或者可以用命令行直接新建文件并填充:

```sh
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## `type-enum`

- `feat`：添加新功能（feature）。
- `fix`：修复 bug。
- `docs`：更新文档（例如：README、文档注释等）。
- `style`：对代码样式、格式进行调整，不涉及代码逻辑的更改。
- `test`：添加或修改测试代码。
- `refactor`：对代码进行重构，既不修复 bug 也不添加新功能。
- `chore`：其他修改（不在上述类型中的修改），杂七杂八的修改。
- `revert`：表示撤销之前的提交。
