module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 9999, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // proxy: {
    //     '/api': {
    //         target: '<url>',
    //         ws: true,
    //         changeOrigin: true
    //     },
    //     '/foo': {
    //         target: '<other_url>'
    //     }
    // }  // 配置多个代理
  },
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}
