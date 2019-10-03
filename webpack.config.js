const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
