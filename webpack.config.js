const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

const paths = {
  entry: path.join(__dirname, 'src/index.js'),
  output: path.join(__dirname, 'dist'),
  source: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    app: paths.entry,
  },
  output: {
    path: paths.output,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ].concat(vtkRules),
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      paths.source,
    ],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new WriteFilePlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    hot: false,
  },
};
