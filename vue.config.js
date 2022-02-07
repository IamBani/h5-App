/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const tsImportPluginFactory = require('ts-import-plugin');
const { merge } = require('webpack-merge');

module.exports = {
  chainWebpack(config) {
    // 配置VantUI按需引入
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: (name) => `${name}/style/less`,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        });
        return options;
      });
  },
};
