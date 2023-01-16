module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    'ignorePatterns': ['*.sass', '*.scss', '*.json', 'dist/*'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off'
    }
};
