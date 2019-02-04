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

  return defaultConfig;
};
