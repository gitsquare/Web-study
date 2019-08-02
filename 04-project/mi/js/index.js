handleCart();
handleNav();
handleCarousel();
handleCate();
handleCountdown();
handleFlashProduct();
handleElecProduct();

//处理购物车
	function handleCart(){
		//1.获取元素
		var oCart = document.querySelector('.top .cart');
		var oCartLink = document.querySelector('.top .cart .cart-box a');
		var oCartContent = document.querySelector('.top .cart .cart-content');
		var oLoader = oCartContent.querySelector('.loader');
		var oEmptyCart = oCartContent.querySelector('.empty-cart');
		oCart.onmouseenter = function(){
			//1.改变购物车图标的背景色和字体颜色
			oCartLink.style.background = '#fff';
			oCartLink.style.color = '#ff6700';
			//2.加载loading图标
			oLoader.style.display = 'block';
			//3.显示购物车内容,假设购物车完全显示就获取到了获取购物车数据
			animate(oCartContent,{height:100},true,function(){
				oLoader.style.display = 'none';
				//此处会根据请求结果显示
				oEmptyCart.style.display = 'block';
			});
		}
		oCart.onmouseleave = function(){
			//1.改变购物车图标的背景色和字体颜色
			oCartLink.style.background = '#424242';
			oCartLink.style.color = '#b0b0b0';
			//2.隐藏购物车内容
			animate(oCartContent,{height:0},true,function(){
				//3.隐藏购物车数据和loading图片
				oLoader.style.display = 'none';
				oEmptyCart.style.display = 'none';
			});	
		}
	}

//处理导航栏
	function handleNav(){
		var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
		var oNavContent = document.querySelector('.header .header-nav-content');
		var oNavContentContainer = oNavContent.querySelector('.container');
		var hideTimer = 0;
		var loadTimer = 0;
		for(var i = 0;i<aNavItem.length-2;i++){
			aNavItem[i].index = i;
			aNavItem[i].onmouseenter = function(){
				//从某个NavItem移向另一个，不让oNavContent消失
				clearTimeout(hideTimer);
				oNavContent.style.borderTop = '1px solid #ddd';
				//鼠标移入之后，先出现loader
				oNavContentContainer.innerHTML = '<div class="loader"></div>';
				animate(oNavContent,{height:180},true,function(){
					oNavContent.style.overflow = 'visible';
				});

				//模拟数据加载
				// 因为定时器中的this指向window，所以需要把this.index保存，或者用bind改变this指向
				// var index = this.index;
				//去除不必要的加载，在500ms以内从某个NavItem移向另一个再返回到那个NavItem，就不需要展示另一个，所以需要清除定时器
				clearTimeout(loadTimer);
				var loadTimer = setTimeout(function(){
					// loadData(index);
					loadData(this.index);
				}.bind(this),500)
			}
			aNavItem[i].onmouseleave = function(){
				hideNavContent();
			}
		}
		oNavContent.onmouseenter = function(){
			clearTimeout(hideTimer);
		}
		oNavContent.onmouseleave = function(){
			hideNavContent();
		}
		function hideNavContent(){
			hideTimer = setTimeout(function(){
				oNavContent.style.overflow = 'hidden';
				animate(oNavContent,{height:0},true,function(){
					oNavContent.style.borderTop = 'none';
				})
			},300)
		}
		function loadData(index){
			var data = aNavItemData[index];
			var html = '<ul>';
			for(var i = 0;i<data.length;i++){
				html +=	'<li>';
				html +=	'	<div class="img-box">';
				html +=	'		<a href="'+data[i].url+'">';
				html +=	'			<img src=" '+data[i].img+' " alt="">';
				html +=	'		</a>';
				html +=	'	</div>';
				html +=	'	<p class="product-name">'+data[i].name+'</p>';
				html +=	'	<p class="product-price">'+data[i].price+'</p>';
				if(data[i].tag){
					html +=	'<span class="tag">'+data[i].tag+'</span>';
				}
				html +=	'</li>';
			}
			html += '</ul>';
			oNavContentContainer.innerHTML = html;
		}
	}

//处理轮播图
	function handleCarousel(){
		new Carousel({
			id:'carousel',
			aImg:[
					'images/b1.jpg',
					'images/b2.jpg',
					'images/b3.jpg',
					'images/b4.jpg',
					'images/b5.jpg'	
				],
			width:1226,
			height:460,
			playDuration:5000
		});
	}

//处理分类面板
	function handleCate(){
		var aCateItem = document.querySelectorAll('.home .banner .cate .cate-item');
		var oCateContent = document.querySelector('.home .banner .cate-content');
		var oCateBox = document.querySelector('.home .banner .cate-box');
		for(var i = 0;i<aCateItem.length;i++){
			aCateItem[i].index = i;
			aCateItem[i].onmouseenter = function(){
				//从某个aCateItem[i]到另一个aCateItem[i]需要把active清除掉
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
				oCateContent.style.display = 'block';
				this.className = 'cate-item active'
				loadData(this.index);
			}
			// 只要在oCateBox中就不会消失，离开才会消失
			oCateBox.onmouseleave = function(){
				oCateContent.style.display = 'none';
				for(var j = 0;j<aCateItem.length;j++){
					//离开oCateBox后，清除active
					aCateItem[j].className = 'cate-item';
				}
			}
		}
		function loadData(index){
			var data = aCateItemData[index];
			var html = '<ul>';
			for(var k = 0;k<data.length;k++){
				html +=	'<li>';
				html +=	'	<a href="'+data[k].url+'">';
				html +=	'		<img src="'+data[k].img+'" alt="">';
				html +=	'		<span>'+data[k].name+'</span>';
				html +=	'	</a>';
				html +=	'</li>';
			}
				html += '</ul>';
			oCateContent.innerHTML = html;
		}
	}

//倒计时
	function handleCountdown(){
		var oTimeNum = document.querySelectorAll('.flash .timer-num');
		var endDate = new Date('2019-08-1 12:00:00');
		var endtimes = endDate.getTime();
		var timer = 0
		function to2Str(num){
				return num < 10 ? '0'+ num : ''+ num;
			}
		function handleTimer(){
			var allMilsec = endtimes - Date.now();
			if(allMilsec < 0){
				allMilsec = 0;
				clearTimeout(timer);
			}
			var allSec = parseInt(allMilsec/1000);
			var iHour = parseInt(allSec/3600);
			var iMinute = parseInt(allSec%3600/60);
			var iSecond = allSec%3600%60;
			oTimeNum[0].innerHTML = to2Str(iHour);
			oTimeNum[1].innerHTML = to2Str(iMinute);
			oTimeNum[2].innerHTML = to2Str(iSecond);
		}
		timer = setInterval(handleTimer,1000);
		handleTimer();
	}
	
//处理闪购商品
function handleFlashProduct(){
	var oProductList = document.querySelector('.flash .product-list');
	var aSpan = document.querySelectorAll('.flash .ctr-btn');

	aSpan[0].onclick = function(){
		oProductList.style.marginLeft = '0px';
	}
	aSpan[1].onclick = function(){
		oProductList.style.marginLeft = '-978px';
	}
}

//处理家电选项卡
function handleElecProduct(){
	var aTabItem = document.querySelectorAll('.elec .tab .tab-item');
	var oElecProduct = document.querySelector('.elec .elec-product');
	//初始化加载
	loadData(0);
	for(var i = 0;i<aTabItem.length;i++){
		aTabItem[i].index = i;
		aTabItem[i].onmouseenter = function(){
			for(var j = 0;j<aTabItem.length;j++){
				aTabItem[j].className = 'tab-item';
			}
			this.className = 'tab-item tab-item-active';
			//加载数据
			loadData(this.index);
		}
	}
	function loadData(index){
		var data = aElecItemData[index];
		var html = '';
		//根据数据构建html
		for(var k = 0;k<data.length-1;k++){
			html +=	'<li class="product-item product-item-m">';
			html +=	'	<a href="'+data[k].url+'">';
			html +=	'		<img src="'+data[k].img+'" alt="" class="product-img">';
			html +=	'	</a>';
			html +=	'	<h3 class="product-name">'+data[k].name+'</h3>';
			html +=	'	<p class="product-desc">'+data[k].desc+'</p>';
			html +=	'	<p class="product-price">';
			html +=	'		<strong>'+data[k].price+'</strong><span>&nbsp;元</span>';
			html +=	'		<del>'+data[k].del+'元</del>';
			html +=	'	</p>';
			if(data[k].flag){
				html +=	'	<span class="flag '+data[k].flag.name+'">'+data[k].flag.content+'</span>';
			}
			if(data[k].view){
				html +=	'	<div class="view">';
				html +=	'		<a href="#">';
				html +=	'			<p class="recommend">'+data[k].view.recommend+'';
				html +=	'			</p>';
				html +=	'			<p class="author">';
				html +=	'				来自于<span>'+data[k].view.author+'</span>的评价';
				html +=	'			</p>';
				html +=	'		</a>';
				html +=	'	</div>';
			}
			html +=	'</li>';
		}
		var lastData = data[data.length-1];
		html +=	'<li class="product-item product-item-min">';
		html +=	'	<a href="'+lastData.top.url+'">';
		html +=	'		<img src="'+lastData.top.img+'" alt="" class="product-img">';
		html +=	'	</a>';
		html +=	'	<a href="../mi-band/mi-band.html">';
		html +=	'		<h3 class="product-name">'+lastData.top.name+'</h3>';
		html +=	'	</a>';
		html +=	'	<p class="product-price">';
		html +=	'		<strong>'+lastData.top.price+'</strong><span>&nbsp;元</span>';
		html +=	'	</p>';
		html +=	'</li>';
		html +=	'<li class="product-item product-item-min">';
		html +=	'	<a href="'+lastData.top.url+'" class="more">';
		html +=	'		'+lastData.bottom.txt+'<span>'+lastData.bottom.tag+'</span>';
		html +=	'		<i class="iconfont">'+lastData.bottom.icon+'</i>';
		html +=	'	</a>';
		html +=	'</li>';
		oElecProduct.innerHTML = html;
	}
}
