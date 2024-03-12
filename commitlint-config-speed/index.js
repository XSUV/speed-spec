module.exports = {
  rules: {
    // 0：不检查该规则；  1：警告级别，但不会阻止提交； 2：错误级别，会阻止提交
    // 在提交消息的正文（body）前需要有空行
    'body-leading-blank': [1, 'always'],
    // 提交消息的正文（body）每行的最大长度为100个字符
    'body-max-line-length': [2, 'always', 100],
    // 在提交消息的页脚（footer）前需要有空行
    'footer-leading-blank': [1, 'always'],
    // 提交消息的页脚（footer）每行的最大长度为100个字符
    'footer-max-line-length': [2, 'always', 100],
    // 提交消息的标题（header）的最大长度为100个字符
    'header-max-length': [2, 'always', 100],
    // 提交消息的作用域（scope）需要使用小写字母
    'scope-case': [2, 'always', 'lower-case'],
    // 提交消息的主题（subject）大小写不做要求
    'subject-case': [0],
    // 提交消息的主题（subject）不能为空
    'subject-empty': [2, 'never'],
    // 提交消息的主题（subject）末尾不需要句号
    'subject-full-stop': [2, 'never', '.'],
    // 提交消息的类型（type）需要使用小写字母
    'type-case': [2, 'always', 'lower-case'],
    // 提交消息的类型（type）不能为空
    'type-empty': [2, 'never'],
    // 提交消息的类型（type）只能是以下几种：feat, fix, docs, style, test, refactor, chore, revert
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']
    ]
  }
}
