const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// only for gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

// only for codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader', // Inyecta los estilos
          'css-loader', // Transforma el CSS en módulos
        ],
      },
      {
        test: /\.scss$/, // Agregar soporte para SCSS
        use: [
          'style-loader', // Inyecta CSS en el DOM
          'css-loader', // Transforma CSS en módulos
          'sass-loader', // Compila Sass a CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Para imágenes
        type: 'asset/resource', // Usar asset modules de Webpack 5
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/, // Para fuentes
        type: 'asset/inline', // Convertir fuentes en base64
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'), // Cambia 'dist' a 'public' para que coincida con la salida.
    },
    client: {
      webSocketURL: publicUrl,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html',
    }),
  ],
};
