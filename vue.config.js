module.exports = {
  devServer: {
    port: 9999, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
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
