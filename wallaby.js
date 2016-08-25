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

    bootstrap: function bootstrap(w) {
      require('./tests/setup');
      require(require('path').join(w.localProjectDir, 'node_modules/coffee-script'));
    },
  };
};
