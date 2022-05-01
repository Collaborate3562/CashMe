/* eslint-disable linebreak-style */
module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  const config = {
    entry: './app/app.js',
    output: {
      path: `${__dirname}/lib`,
      filename: 'app.js',
      library: 'my-library',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.svg$/,
          use: 'file-loader?name=[name].[ext]&outputPath=images'
        }
      ],
    },
    devtool: mode === 'development' ? 'cheap-module-eval-source-map' : false,
  };
  return config;
};
