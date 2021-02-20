module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  plugins: ["react", "import", "react-hooks"],
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:prettier/recommended",
  ],
  rules: {
    // using prettier
    indent: "off",
    // using prettier
    "react/jsx-indent": "off",
    // using prettier
    "react/jsx-indent-props": "off",
    "react/prop-types": "off",
    "no-confusing-arrow": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-space-before-closing": "off",
    "react/forbid-prop-types": [
      2,
      {
        forbid: ["any"],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    "react/jsx-tag-spacing": "off",
    "max-len": "off",
    "linebreak-style": ["error", "unix"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".mdx", ".jsx"] },
    ],
    // it is not working correctly with ternary operator
    "react/jsx-closing-bracket-location": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-named-default": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "arrow-parens": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "time", "timeEnd"],
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: false,
      },
    ],
    curly: ["error", "all"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "if" },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
      { blankLine: "always", prev: "block-like", next: "block-like" },
    ],
    "prettier/prettier": "error",
    "react/jsx-no-bind": [
      "error",
      {
        allowBind: true,
        allowArrowFunctions: true,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-nested-ternary": "error",
    "no-inline-styles/no-inline-styles": 1,
  },
};
