module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-autoreset': {},
    'postcss-initial': {replace: true},
  }
};