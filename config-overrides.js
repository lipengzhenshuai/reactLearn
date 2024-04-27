// module.exports = {
//     // webpack: (config) => {
//         // config.output.library = 'reactApp';
//         // config.output.libraryTarget = 'umd';
//         // // 文件的公共路径 eg: js文件地址: http://localhost:3001/xxxx
//         // // config.output.publicPath = 'http://localhost:3001';
//         // config.output.publicPath = '/react';
//         // return config;
//     // },
//     devServer: (configFunc) => {
//         return function (proxy, llowedHost) {
//             const config = configFunc(proxy, llowedHost);
//             config.headers = {
//                 "Access-Control-Allow-Origin": "*"
//             }
//             config.proxy = {
//                 '/tiku/': {
//                     target: 'https://ijiaoyan.aixuexi.com',
//                     changeOrigin: true,
//                     secure: false,
//                 },
//                 '/api/slideGame/': {
//                     target: 'https://slide-game.aixuexi.com',
//                     changeOrigin: true,
//                     secure: true,
//                 },
//             }
//             return config;
//         }
//     }
// }

/* config-overrides.js */

const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
);
