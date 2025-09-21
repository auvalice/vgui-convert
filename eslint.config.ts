import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    markdown: true,
    html: true,
    css: true,
  },
  rules: {
    'test/prefer-lowercase-title': ['error', {
      ignoreTopLevelDescribe: true,
    }],
  },
})
