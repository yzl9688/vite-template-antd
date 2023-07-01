module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, 'always', [
      'feat',
      'fix',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert'
    ]],
    "header-case": [0, 'always'],
    "subject-case": [0, 'always'],
  }
}

