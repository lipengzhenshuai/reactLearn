module.exports = {
    webpack: (config) => {
        config.output.library = 'reactApp';
        config.output.libraryTarget = 'umd';
        config.output.publicPath = 'http://localhost:3001';
        return config;
    },
    devServer: (configFunc) => {
        return function (proxy, llowedHost) {
            const config = configFunc(proxy, llowedHost);
            config.headers = {
                "Access-Control-Allow-Origin": "*"
            }
            return config;
        }
    }
}