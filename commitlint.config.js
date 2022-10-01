module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [commit => commit.includes('[skip ci]')],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['2d', 'core', 'create', 'docs', 'legacy', 'ui', 'vite-plugin'],
    ],
  },
};