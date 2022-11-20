module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es2022: true,
  },
  // settings: {
  //   "import/resolver": {
  //     node: {
  //       extensions: [".js", ".jsx", ".ts", ".tsx"],
  //     },
  //   },
  // },
  globals: {},
  overrides: [
    {
      files: ["packages/**.js", "packages/**.jsx"],
      parser: "babel-eslint",
      extends: ["standard"],
      rules: {
        "react-hooks/exhaustive-deps": "off",
      },
    },
    {
      files: ["packages/**.tsx", "packages/**.ts"],
      parser: "@typescript-eslint/parser",
      rules: {},
    },
  ],
};
