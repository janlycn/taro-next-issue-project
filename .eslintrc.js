module.exports = {
  "extends": [
    "taro/react",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "rules": {
    "prettier/prettier": [
      "error"
    ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "Taro|React|_"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/sort-comp": "off",
    "react-hooks/exhaustive-deps": "off"
  },
  "parser": "babel-eslint"
}