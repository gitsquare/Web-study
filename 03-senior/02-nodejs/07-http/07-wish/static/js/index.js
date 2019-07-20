(function($){
	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	var $wish = $('.wish');
	var $wall = $('.wall');
	//获取父容器和自身的宽高
	var wishWidth = $wish.width(),
		wishHeight = $wish.height(),
		wallWidth = $wall.width(),
		wallHeight = $wall.height();
	function handWishPep($elem){
		//1.设置许愿卡片拖动
		$elem.pep({  constrainTo: '.wall' })
		//2.随机显示许愿卡片
		$elem.each(function(){
			let x = getRandom(0,wallWidth - wishWidth);
			let y = getRandom(0,wallHeight - wishHeight);
			$(this).css({
				transform: "matrix(1, 0, 0, 1, "+x+", "+y+")"
			})
		});
		// 当hover的时候改变层级关系
		$elem.hover(function(){
			$(this).css({
				zIndex:999
			})
		},function(){
			$(this).css({
				zIndex:0
			})
		})		
	}
	//初始化的时候使wish具有拖拽功能
	handWishPep($wish);
	//监听添加事件
	$('.sub-btn').on('click',function(){
		//发送ajax请求
		$.ajax({
			//因为整个index页面都是从后台请求过来的，服务器端可以通过pathname == '/add'来匹配
			url:"/add",
			type:'post',
			//返回的数据类型是JSON
			dataType:'json',
			data:{
				// 把数据用传递给服务器端，服务器端用名content接收
				content:$('#content').val()
			}
		})
		.done(function(result){
			// 成功从服务器端获取数据后，动态添加DOM节点
			if(result.status == 0){
				var $dom = $(`<div class="wish" style="background: ${result.data.color}">
								<a href="javascript:;" class="close" data-id='${result.data.id}'></a>
								${result.data.content}
							</div>`);
				$wall.append($dom);
				//使新生成的wish也具有拖拽功能
				handWishPep($dom);
				$('#content').val('');
			}else{
				//返回失败后
				alert(result.message);
			}
		});
	});
	//监听删除事件
	$wall.on('click','.close',function(){
		var $this = $(this);
		$.ajax({
			url:'/del',//ajax中的url是如何与服务器端的reqUrl.pathname匹配的？
			dataType:'json',
			// 这里的this就是指当前的.close
			data:'id='+ $this.data('id')
		})
		// 从服务器端获取删除的提示，根据删除是否成功的提示进行判断处理
		.done(function(result){
			if(result.status == 0){
				/*删除DOM节点，因为在此回调函数中this发生了变化，
				所以把DOM节点.close用bind方法传递进来，把.close的父元素删除
				*/
				$(this.parentNode).remove();
			}else{
				alert(result.message);
			}
		}.bind(this));
	});
})(jQuery);	
