module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "jest/globals": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": [0],
        "quotes": [2, "double"],
        "react/display-name": [0],
        "react/prop-types": [0]
    }
};
