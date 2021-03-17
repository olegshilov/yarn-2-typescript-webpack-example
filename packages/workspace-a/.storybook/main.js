const customWebpackConfig = require('../webpack.config.js');

module.exports = {
  stories: ['../../**/*.stories.tsx'],
  addons: [require.resolve('@storybook/addon-essentials')],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.tsx', '.ts');

    return {
      ...config,
      module: {
        ...config.module,
        rules: customWebpackConfig.module.rules,
      },
    };
  },
};
