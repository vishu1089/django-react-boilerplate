const path = require('path');

module.exports = {
  root: true,
  rules: {
    "default-param-last": "off",
    "@babel/camelcase": "off"
  },
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/webpack.config.js'),
        'config-index': 1
      }
    },
    react: {
      "version": "detect"
    },
  }
}
