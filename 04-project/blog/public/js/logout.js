;(function($){
	//用户退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			if(result.status == 0){//成功
				// window.location.reload()
				window.location.href = "/" //退出登录后，回到首页
			}else{//失败
				$err.html(result.message);
			}			
		})
		.fail(function(err){
			$('#user-info .err').html('请求失败,请稍后再试一试');	
		})
	})
})(jQuery);