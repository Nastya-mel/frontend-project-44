import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,

  {
    files: ['**/*.{js}'],
    rules: {
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
    },
  },
]
