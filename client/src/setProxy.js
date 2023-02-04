
// Proxy 설정
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080", // 서버 URL or localhost
      changeOrigin: true,
    })
  );
};