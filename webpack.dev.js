const path = require("path");
const config = require("./package.json");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, config.main),
  // add source mapping
  devtool: "source-map",
  output: {
    // path to output files (production files)
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
