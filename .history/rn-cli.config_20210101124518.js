/*
 * @Author: your name
 * @Date: 2021-01-01 12:43:14
 * @LastEditTime: 2021-01-01 12:45:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /helloword/rn-cli.config.js
 */
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },,
};

