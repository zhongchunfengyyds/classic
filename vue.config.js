module.exports = {
  publicPath: '/zhong/',
  devServer: {
    port: 9999, // 端口号
    host: 'localhost',
    https: false// https:{type:Boolean}
    // proxy: {
    //   '/agent': { //这里最好有一个 /
    //     target: 'http://47.101.134.233:3000', // 后台接口域名
    //     // target: 'http://127.0.0.1:3000', // 后台接口域名
    //     ws: true, //如果要代理 websockets，配置这个参数
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, //是否跨域
    //     pathRewrite: {
    //       '^/agent': ''
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}