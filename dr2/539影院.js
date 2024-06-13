// 搜索数字验证
muban.首图2.二级.desc = '.data:eq(1)&&Text;.data:eq(3)&&Text;.data:eq(2)&&Text;.data:eq(5)&&Text;.data:eq(4)&&Text';
muban.首图2.二级.tabs = '.nav.nav-tabs&&li';
var rule = {
	title:'539影视',
	模板:'首图2',
	host:'http://539539.xyz',
	// url:'/vodshow/fyclass/page/fypage.html',
	
	headers: {
		//'User-Agent': 'PC_UA'
		'User-Agent': 'MOBILE_UA'
	},
	// searchUrl:'/vodsearch.html#wd=**;post',
	//searchUrl:'/vodsearch.html?wd=**&submit=;post',
	class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(\\d+).html',
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
	 //搜索: 'ul.stui-vodlist clearfix&&li;a&&title;.stui-vodlist__thumb lazyload&&data-original;.pic-text&&Text;a&&href',

	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}
