const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ignoreEntory = /\.stories\.js$/;
const ignoreMap = /\.stories$/;

module.exports = {
  //assetPrefix: ".",
  webpack: config => ({
    ...config,
    entry: async () => {
      const entries = await config.entry();
      Object.keys(entries).forEach(
        key => ignoreEntory.test(key) && delete entries[key]
      );
      return entries;
    },
    resolve: {
      ...config.resolve,
      plugins: [new TsconfigPathsPlugin()]
    }
  }),
  exportPathMap: async pathMap => {
    Object.keys(pathMap).forEach(
      key => ignoreMap.test(key) && delete pathMap[key]
    );
    return pathMap;
  }
};
