# 修改这个项目中的log

## node版本： 14.17.0

## 引入less

    安装less和less-loader，less-loader版本为7

    ```shell
    npm install less less-loader@7 --save-dev
    ```
    
    修改config-overrides.js文件，添加less-loader配置

    ```js
    const { override, addLessLoader } = require('customize-cra');

        module.exports = override(
        addLessLoader({
            lessOptions: {
            javascriptEnabled: true,
            },
        }),
        );
    ```

## 失败的尝试：尝试升级npm包

    1.npx npm-check-updates -u
    2.npm install
    npm包升级到最新版本，然后安装，但是一堆问题，感觉升级npm包或者升级node都是个让人痛苦的事情；
