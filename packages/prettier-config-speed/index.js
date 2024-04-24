// @see https://prettier.io/docs/en/options

const config = {
    // 最大行宽度，超过将进行换行
    printWidth: 100,
    // 一个制表符代表的空格数
    tabWidth: 2,
    // 是否使用制表符进行缩进（false表示使用空格）
    useTabs: false,
    // 是否在语句末尾打印分号
    semi: true,
    // 使用单引号而不是双引号
    singleQuote: true,
    // 对象的 key 是否加引号，'as-needed' 表示仅在必要时加
    quoteProps: 'as-needed',
    // JSX 中是否使用单引号
    jsxSingleQuote: false,
    // 多行时尾随逗号的打印方式，'all' 表示在可能的地方都打印
    trailingComma: 'all',
    // 对象字面量的大括号内是否有空格
    bracketSpacing: true,
    // JSX 标签的闭合括号是否单独一行
    bracketSameLine: false,
    // 箭头函数参数是否总是包含圆括号
    arrowParens: 'always',
    // 文件结尾的换行符，'lf' 表示仅\n换行 可选值 "<auto|lf|crlf|cr>"
    endOfLine: 'lf',
};

export default config;
