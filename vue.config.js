module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    config.optimization.minimize(false)
  }
}
