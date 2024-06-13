muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.tab-item';
var rule = {
    title:'FreeOK',
    模板:'mxpro',
    host:'https://www.freeok.vip',
    // url:'/vodshow/fyclass--------fypage---.html',
    headers:{
      'User-Agent':'PC_UA',
  },

    searchUrl: '/so1so/**-------------.html;post',
    class_parse: '.navbar-items&&li:gt(1):lt(6);a&&title;a&&href;/(\\d+).html',
}
