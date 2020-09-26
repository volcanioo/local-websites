module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules:[
        {
          test:/\.(s*)css$/,
          use: [
            'style-loader',
            'css-loader', 
            'sass-loader'
          ]
        }
      ]
    },
  };