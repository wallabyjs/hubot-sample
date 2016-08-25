module.exports = function () {
  return {
    files: [
      'src/*.js',
      'scripts/*.js',
      '!src/*.spec.js',
      'tests/setup.js'
    ],
    tests: [
      'src/*.spec.js',
    ],
    env: {
      type: 'node'
    },
    testFramework: 'mocha',

    bootstrap: function bootstrap() {
      require('./tests/setup');
      require('coffee-script/register');
    },
  };
};