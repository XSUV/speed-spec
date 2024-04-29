# speed-lint

## 安装

```sh
npm install speed-lint --save
```

## CLI

```bash
npx speed-lint
```

## Monorepo

多包项目和前后端分离项目经常采用 monorepo 的项目代码管理模式，即一个 git 仓库中包含多个不同类型的应用，无法使用同一套规约。这种情况下，我们建议：

1. 在仓库根目录运行 `npx speed-lint` 并选择 `Base (JavaScript)` 或 `Base (TypeScript)` 模板
2. 切换到子应用/子包目录并运行 `npx speed-lint` 并选择适合的模板，f2elint 会自动检测子应用/子包，并跳过 lint-staged 和 commitlint

示例 1：前后端分离应用

```bash
npx speed-lint # 选择 Base (JavaScript) 模板

cd client
npx speed-lint # 选择 React (TypeScript) 模板

cd ../server
npx speed-lint # 选择 Node (TypeScript) 模板
```

示例 2：多包项目

```bash
npx speed-lint # 选择 Base (JavaScript) 模板

cd packages/cli
npx speed-lint # 选择 Node (TypeScript) 模板

cd ../react
npx speed-lint # 选择 React (TypeScript) 模板

cd ../vue
npx speed-lint # 选择 Vue (TypeScript) 模板
```

## API

```js
import { speedLint, TemplateType } from 'speed-lint';

await speedLint('path/to/project', {
  template: TemplateType.ReactTS,
  stylelint: true,
  prettier: true,
  lintStaged: true,
  commitlint: false,
});
```
