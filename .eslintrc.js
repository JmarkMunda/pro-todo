module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    quotes: ["error", "double"],
    "no-unused-vars": [
      "error",
      {vars: "all", args: "none", ignoreRestSiblings: false},
    ],
    indent: ["error", 2],
    semi: ["error", "always"],
    curly: "off",
    "no-var": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
};
