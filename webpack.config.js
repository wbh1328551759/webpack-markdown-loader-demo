const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = process.cwd()

module.exports = {<!-- -->
  mode: 'production',
  entry: './src/main.ts',
  output: {<!-- -->
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {<!-- -->
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {<!-- -->
        test: /.md$/,// 匹配入口文件中加载到的md文件
        use: [
          './markdown-loader' // use属性不仅可以使用模块名称，也可以使用模块文件路径
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    })
  ]
}
