const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/AssetWeb', {target: 'http://172.16.131.31:8005'}))
};
