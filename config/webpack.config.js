const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const paths = require( './paths' );

module.exports = {
  entry: paths.themeIndex,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-optional-chaining',
                'babel-plugin-transform-class-properties'
              ],
              presets: ['@babel/preset-env']
            }
          },
          'eslint-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'assets/js/policy-bundle.js',
    path: paths.themeRoot
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'style.css'
    } )
  ]
};
