var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");[1]

module.exports = {
  context: __dirname + "/src",
  /*
   * Entrada de arquivo(s)
   */
  entry: {
    app: "./app.js",
  },
  /*
   * Saída de aquivo(s)
   */
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist/assets",
    publicPath: "/assets", // Nova chave
    // library: 'MyClassName' // Exportar métodos globais
  },
  /*
   * Loaders
   */
  module: {
    rules: [
      /*
       * Regras de transpilação es2015
       */
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"]},
        }],
      },
      /*
       * Regras CSS
       */
      {
        test: /\.css$/,
        use: [
          "style-loader", { loader: "css-loader", options: { modules: true } }
        ],
      },
      /*
       * Regras de transpilação SASS/SCSS
       */
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      /*
       * Regras criar arquivo de css separado
       */
       {
         test: /\.css$/,
         use: [
           ExtractTextPlugin.extract("css"), [2]
           "css-loader",
         ],
       },
    ],
  },
  /*
   * Plugins
   */
   plugins: [
     // Extrair CSS em arquivo separado
     new ExtractTextPlugin({ [3]
       filename: "[name].bundle.css",
       allChunks: true,
     }),
   ],
  /*
   * Servidores     mkmkmkmkmkmkm
   */
  devServer: {
    contentBase: __dirname + "/src", // Nova chave
  },
}
