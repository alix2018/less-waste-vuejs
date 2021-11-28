const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      });
    config.resolve.alias
      .set('@src', path.resolve(__dirname, 'src/'))
      .set('@public', path.resolve(__dirname, 'public/'))
      .set('@scss', path.resolve(__dirname, 'scss/'));
  }
};