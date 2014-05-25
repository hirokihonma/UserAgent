if ((navigator.userAgent.indexOf('iPhone') > 0 &&
     navigator.userAgent.indexOf('iPad') == -1) || 
     navigator.userAgent.indexOf('iPod') > 0 || 
	 navigator.userAgent.indexOf('Android') > 0) {
		if(confirm('スマートフォンサイトに移動しますか')){
		location.href = 'smartphone/index.html'; //スマートフォン専用ページのURLを指定する
		}
	 }
