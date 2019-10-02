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
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'assets/js/stories-bundle.js',
    path: paths.themeRoot
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'style.css'
    } )
  ]
}