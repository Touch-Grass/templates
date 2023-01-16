module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],

  env: {
    es2020: true,
    browser: true,
    node: true,
  },

  rules: {
    "prettier/prettier": "error",
  },

  ignorePatterns: ["dist/**/*"],
};
