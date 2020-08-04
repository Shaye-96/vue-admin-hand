const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /** vue3.0内置了webpack所有东西，
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   * 如果这个值是一个对象Object，则会通过 webpack-merge 合并到最终的配置中。
   * 如果这个值是一个函数Function，则会接收被解析的配置作为参数。
   * 该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
   **/
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  /**
   * 接收一个基于 webpack-chain 的 ChainableConfig 实例。
   * 允许对内部的 webpack 配置进行更细粒度的修改
   */
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");     
    svgRule.uses.clear();     
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({ 
      symbolId: "icon-[name]",
      include: ["./src/icons"] 
    });
  },
  // 生产环境是否生成 sourceMap 文件,设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // css预设器配置项,向 CSS 相关的 loader 传递选项
    /**
     *  css、postcss、sass、less、stylus
     */
    loaderOptions: {
      scss: { 
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // requireModuleExtension: false
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      '/devApi': {
          target: "http://www.web-jshtml.cn/productapi/token", //API服务器的地址  http://www.web-jshtml.cn/api
          changeOrigin: true,
          pathRewrite: {
              '^/devApi': ''
          }
      }
    },
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}