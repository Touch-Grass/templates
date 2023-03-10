module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],

  env: {
    es2020: true,
    browser: true,
    node: true,
  },

  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "prettier/prettier": "error",
  },

  ignorePatterns: ["dist/**/*"],
};
