/*
 * @Author: dui
 * @Date: 2021-01-01 12:43:14
 * @LastEditors: dui
 * @LastEditTime: 2021-01-01 14:36:59
 * @FilePath: /helloword/rn-cli.config.js
 */
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
