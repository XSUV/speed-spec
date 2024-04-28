module.exports = {
  defaultSeverity: 'warning', // 默认严重性级别设置为警告
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  rules: {
    'block-no-empty': null, // 不允许出现空的代码块
    'color-no-invalid-hex': true, // 颜色值不能为无效的十六进制
    'comment-no-empty': true, // 不允许出现空的注释
    'declaration-block-no-duplicate-properties': [
      true, // 声明块中不允许有重复的属性
      {
        ignore: ['consecutive-duplicates-with-different-values'], // 但忽略连续的重复属性，只要它们的值不同
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true, // 简写形式的属性不能覆盖相关的完整形式的属性
    'font-family-no-duplicate-names': true, // 字体族名称不允许重复
    'font-family-no-missing-generic-family-keyword': null, // 字体族名称列表中必须有一个通用字体族关键词
    'function-calc-no-unspaced-operator': true, // calc函数中的操作符后面必须有空格
    'function-linear-gradient-no-nonstandard-direction': true, // 线性渐变的方向值不能为非标准值
    'keyframe-declaration-no-important': true, // 关键帧声明中不能使用!important
    'media-feature-name-no-unknown': true, // 媒体特性名称不能为未知
    'no-descending-specificity': null, // 不允许选择器具有降低的特异性
    'no-duplicate-at-import-rules': true, // 不允许重复的@import规则
    'no-duplicate-selectors': true, // 不允许重复的选择器
    'no-empty-source': null, // 源码文件不能为空
    'no-invalid-double-slash-comments': true, // 不允许无效的双斜线注释
    'property-no-unknown': true, // 属性不能为未知
    'selector-pseudo-class-no-unknown': [
      true, // 伪类选择器不能为未知
      {
        ignorePseudoClasses: ['global', 'local', 'export', 'v-deep', 'deep'], // 忽略这些自定义的伪类选择器
      },
    ],
    'selector-pseudo-element-no-unknown': true, // 伪元素选择器不能为未知
    'selector-type-no-unknown': [
      true, // 类型选择器不能为未知
      {
        ignore: ['custom-elements'], // 忽略自定义元素
        // ignoreTypes: miniappTags, // 忽略小程序标签
      },
    ],
    'selector-class-pattern': null, // 关闭规则： 横杠连接
    'custom-property-pattern': null, // 关闭规则
    'selector-id-pattern': null, // 关闭规则

    'string-no-newline': true, // 字符串内不允许有换行符
    'unit-no-unknown': [
      true, // 单位不能为未知
      {
        ignoreUnits: ['rpx'], // 忽略这些单位
      },
    ],
    'at-rule-no-unknown': null, // 不检查未知的@规则，以支持SCSS中的@include和@mixin等

       /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    'color-hex-length': 'short', // 颜色值的十六进制长度使用简写形式
    'comment-whitespace-inside': 'always', // 注释内始终要有空白
    'length-zero-no-unit': [
      true, // 长度值为0时不使用单位
      {
        ignore: ['custom-properties'], // 忽略自定义属性
      },
    ],
    'selector-max-id': null, // 选择器中ID的最大数量为0（禁止使用ID选择器）
  },
  overrides: [
    // 对SCSS语言的支持
    {
      files: ['*.scss', '**/*.scss'], // 指定文件匹配模式
      customSyntax: 'postcss-scss', // 使用SCSS的语法解析器
      plugins: ['stylelint-scss'], // 使用stylelint的SCSS插件
      rules: {
        'at-rule-no-unknown': null, // 不检查未知的@规则，以支持SCSS中的@include和@mixin等

        // stylelint-scss的规则
        // https://github.com/stylelint-less/stylelint-less
        'scss/double-slash-comment-whitespace-inside': 'always', // SCSS中双斜线注释内必须始终有空白
      },
    },
    // 对LESS语言的支持
    {
      files: ['*.less', '**/*.less'], // 指定文件匹配模式
      customSyntax: 'postcss-less', // 使用LESS的语法解析器
      plugins: ['stylelint-less'], // 使用stylelint的LESS插件
      rules: {
        'at-rule-no-unknown': null, // 不检查未知的@规则，以支持LESS中的@变量等

        // stylelint-less的规则
        // https://github.com/stylelint-less/stylelint-less
        'less/no-duplicate-variables': true, // 不允许变量声明重复
      },
    },
    // 对html|vue的支持
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  // 不支持CSS-in-JS，因为实现方式太多、太不同
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // 忽略所有JS和TS文件
};
