const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

function buildPath(relative) {
  return path.join(__dirname, relative);
}

module.exports = function(env) {

  const isProduction = (env.production === true );

  return {
    entry: './src/app.js',
    output: {
      path: buildPath('public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: 'styles.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: buildPath('public')
      }
    }
  };
};
