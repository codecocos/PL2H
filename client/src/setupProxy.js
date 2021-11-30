const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://3.35.173.131:5000',
            changeOrigin: true,
        })
    );
};