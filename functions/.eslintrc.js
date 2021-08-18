module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    express: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
