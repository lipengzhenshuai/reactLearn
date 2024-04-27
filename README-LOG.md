# 修改这个项目中的log

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
