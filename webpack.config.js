const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {

        index: './src/index.js',
    
        homepage: './src/homepage.js',

        menu: './src/homepage.js',

        order: './src/order.js',

        contact: './src/contact.js',
    
      },
      devServer: {

        static: './dist',
    
      },
      plugins: [

        new HtmlWebpackPlugin({
    
          title: 'Restaurant Page',
    
        }),
    
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ],

  },
};