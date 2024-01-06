'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    stats: {
      children: true,
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: false,
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'), // Nơi chứa tài nguyên tĩnh để server phục vụ
      port: 8080,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html'}),
      new HtmlWebpackPlugin({
        filename: 'highlight.html',
        template: path.resolve(__dirname, 'src', 'highlight.html'), // Đường dẫn đến file HTML mới
      }),
      new HtmlWebpackPlugin({
        filename: 'bangxephang.html',
        template: path.resolve(__dirname, 'src', 'bangxephang.html'), // Đường dẫn đến file HTML mới
      }),
      new HtmlWebpackPlugin({
        filename: 'ketqua.html',
        template: path.resolve(__dirname, 'src', 'ketqua.html'), // Đường dẫn đến file HTML mới
      }),
      new HtmlWebpackPlugin({
        filename: 'lichthidau.html',
        template: path.resolve(__dirname, 'src', 'lichthidau.html'), // Đường dẫn đến file HTML mới
      }),
      new HtmlWebpackPlugin({
        filename: 'tintuc.html',
        template: path.resolve(__dirname, 'src', 'tintuc.html'), // Đường dẫn đến file HTML mới
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
}