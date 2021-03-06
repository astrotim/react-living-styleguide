module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      ]
    }
  }
};
