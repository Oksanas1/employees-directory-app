import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {ignores: ['node_modules/**', 'dist/**', '/webpack.config.js'],},
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/prop-types': 0,
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'no-alert': 0,
      '@typescript-eslint/no-unused-vars': 'warn',
      'global-require': 0,
      'class-methods-use-this': 0,
      'import/no-extraneous-dependencies': 0,
      'arrow-body-style': 1,
      'prefer-arrow-callback': 1,
      'import/no-cycle': 0,
      'no-undef': 'off',
      'no-constant-condition': 0,
      'no-shadow': 0,
      'no-restricted-globals': 0,
      'no-underscore-dangle': 0,
      'func-names': 0,
      'import/no-dynamic-require': 0,
      'import/prefer-default-export': 0,
      'prefer-template': 0,
      'quotes': ['error', 'single'],
      'prettier/prettier': [
        'warn',
        {
          'endOfLine': 'auto'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
  }
];