// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [require('postcss-autoreset')({
    reset: {
      margin: 0,
      padding: 0
    }
  }), require("postcss-cssnext")]
}
