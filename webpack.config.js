const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'static/media/[name].[hash][ext]'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 20,
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 40,
        },
        framerMotion: {
          test: /[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/,
          name: 'framer-motion',
          chunks: 'all',
          priority: 30,
        },
        reactIcons: {
          test: /[\\/]node_modules[\\/]react-icons[\\/]/,
          name: 'react-icons',
          chunks: 'all',
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
      },
    },
    runtimeChunk: 'single'
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: 'warning'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "crypto": false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3001,
    hot: true
  }
}; 