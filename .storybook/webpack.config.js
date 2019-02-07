const path = require('path');

module.exports = (baseConfig, mode, defaultConfig) => {
  // Add typescript loader
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader'),
    options: {
      configFile: '.storybook/tsconfig.json',
    },
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  // Add markdown loader
  defaultConfig.module.rules.push({
    test: /\.md$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('raw-loader'),
  });
  defaultConfig.resolve.extensions.push('.md');

  // Add scss loader
  defaultConfig.module.rules.push({
    test: /\.s(a|c)ss$/,
    include: path.resolve(__dirname, '../src'),
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          includePaths: [path.resolve(__dirname, '../src/styles/')],
        }
      },
    ],
  });
  defaultConfig.resolve.extensions.push('.scss');

  return defaultConfig;
};
