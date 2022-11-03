const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = process.env.REACT_APP_API_URL

const proxy = {
    target: API_URL,
    changeOrigin: true
}
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware(proxy)
    );
};