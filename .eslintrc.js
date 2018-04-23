module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',

  // required to lint *.vue files
  plugins: [
    'html',
    'vue',
  ],

  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,

    // waning if there is a trailing comma
    'comma-dangle': [1, 'never'],

    // allow async-await
    'generator-star-spacing': 0,

    // semicolons are necessary
    'semi': ['warn', 'always'],

    // add space before function parameters
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }]
  }
}
