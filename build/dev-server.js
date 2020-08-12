var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

var opn = require('opn')
// 代理中间件，它可以实现跨域访问
var proxyMiddleware = require('http-proxy-middleware')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

var server = express()
var compiler = webpack(webpackConfig)

console.log('来吧你哥们')
// console.log(compiler)
console.log('来吧你哥们')

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

// 利用 http-proxy-middleware 中间件实现跨域访问的关键代码
var context = config.dev.context
switch (process.env.NODE_ENV) {
  case 'local': var proxypath = 'http://localhost:8001'; break;
  case 'online': var proxypath = 'https://elm.cangdu.org'; break;
  default: var proxypath = config.dev.proxypath;
}
var options = {
  target: proxypath,
  changeOrigin: true,
}
if (context.length) {
  server.use(context, proxyMiddleware(options))
}

// connect-history-api-fallback 也是个中间件，它解决 vue router 
//的 mode 为 history 时刷新浏览器圆圈和直接输入浏览器地址访问时会 404 的问题
// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')())

// serve webpack bundle output
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))


module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
