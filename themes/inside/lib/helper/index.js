module.exports = function (hexo) {
  hexo.extend.helper.register('url_trim', require('./url_trim'));
  hexo.extend.helper.register('theme_static', require('./theme_static'));
  hexo.extend.helper.register('ga', require('./ga'));
  hexo.extend.helper.register('structured_data', require('./structured_data'));
};
