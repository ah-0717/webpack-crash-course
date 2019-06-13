const path = require('path')

// distまでの絶対パス生成
const outputPath = path.resolve(__dirname, 'dist')
// console.log({outputPath})

// module = file
module.exports = {
  // webpackのエントリーポイント
  // バンドル対象のファイルを指定する
  entry: './src/index.js',

  // webpaclの成果物出力先
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        // useに記載したローダにどういったファイルを適用するか
        test: /\.css$/i,
        // ローダ 実行順序は逆順なので注意
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }, 
  // ドキュメントルートの設定
  devServer: {
    // inline: true,
    // open: true,
    // contentBase: path.join(__dirname, 'dist')
    contentBase: outputPath
  }
}