handleCart();
handleNav();
handleCarousel();
handleCate();
handleSelector()


//购物车
function handleCart(){
	var oCart = document.querySelector('.top .cart');
	var oCartLink = document.querySelector('.top .cart .cart-box a');
	var oCartContent = document.querySelector('.top .cart .cart-content');
	var oLoader = oCartContent.querySelector('.loader');
	var oEmptyCart = oCartContent.querySelector('.empty-cart');
	oCart.onmouseenter = function(){
		oCartLink.style.backgroundColor = '#fff';
		oCartLink.style.color = '#ff6700';
		oLoader.style.display = 'block';
		animate(oCartContent,{height:100},true,function(){
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'block';
		});
	}
	oCart.onmouseleave = function(){
		oCartLink.style.backgroundColor = '#424242';
		oCartLink.style.color = '#b0b0b0';
		animate(oCartContent,{height:0},true);
		oLoader.style.display = 'none';
		oEmptyCart.style.display = 'none';
	}
}

//导航栏
function handleNav(){
	var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContentContainer = oNavContent.querySelector('.container');
	var hideTimer = 0;
	var loadTimer = 0;
	for(var i = 0;i<aNavItem.length-2;i++){
		aNavItem[i].index = i;
		aNavItem[i].onmouseenter = function(){
			clearTimeout(hideTimer);
			oNavContent.style.borderTop = '1px solid #ddd';
			oNavContentContainer.innerHTML = '<div class="loader"></div>';
			animate(oNavContent,{height:180},true,function(){
				oNavContent.style.overflow = 'visible';
			});
			//模拟数据加载
			var index = this.index;
			//去除不必要的加载
			clearTimeout(loadTimer);
			var loadTimer = setTimeout(function(){
				loadData(index);
			},500)
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
		},500)
	}
	function loadData(index){
		var data = aNavItemData[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
			html +=	'<li>';
			html +=	'	<div class="img-box">';
			html +=	'		<a href="#">';
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

//轮播图
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['images/c1.jpg','images/c2.jpg','images/c3.jpg'],
		width:1226,
		height:250,
		playDuration:3000
	});
}

//处理分类面板
function handleCate(){
	var aCateBtn = document.querySelector('.header-nav .header-nav-category>a');
	var aCateItem = document.querySelectorAll('.header-nav .header-nav-category .cate .cate-item');
	var oCateContent = document.querySelector('.header-nav .header-nav-category .cate-content');
	var oCateBox = document.querySelector('.header-nav .header-nav-category .cate-box');
	var oCate = document.querySelector('.header-nav .header-nav-category .cate-box .cate');
	var timer = 0;
	aCateBtn.onmouseenter = function(){
		oCate.style.display = 'block';
		for(var i = 0;i<aCateItem.length;i++){
			aCateItem[i].index = i;
			aCateItem[i].onmouseenter = function(){
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
				oCateContent.style.display = 'block';
				this.className = 'cate-item active'
				loadData(this.index);
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
	aCateBtn.onmouseleave = function(){
		timer = setTimeout(function(){
			oCate.style.display = 'none';
			oCateContent.style.display = 'none';
		},30)
		oCate.onmouseenter = function(){
			clearTimeout(timer);
		}
	}
	oCateBox.onmouseleave = function (){
		oCate.style.display = 'none';
		oCateContent.style.display = 'none';
		for(var j = 0;j<aCateItem.length;j++){
			aCateItem[j].className = 'cate-item';
		}
	}
}

//处理选项卡
function handleSelector(){
	var aTabTitle = document.querySelectorAll('.index-needhelp .content .tab-title li');
	var oQuestion = document.querySelector('.index-needhelp .content .tab-content');
	var ajuti = document.querySelectorAll('.index-needhelp .content .tab-content li');
	//初始化加载
	loadData(0);
	for(var i = 0;i<aTabTitle.length;i++){
		aTabTitle[i].index = i;
		aTabTitle[i].onmouseenter = function(){
			for(var j = 0;j<aTabTitle.length;j++){
				aTabTitle[j].className = 'yangshi';
			}
			this.className = 'yangshi question-active';
			//加载数据
			loadData(this.index);
		}
	}
	function loadData(index){
		var data = aQuestionData[index];
		var html = '';
		//根据数据构建html
		for(var k = 0;k<data.length;k++){
			html +=	'<div class="per xianshi-active">';
			html +=	'	<ul class="clearfix">';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques1+'</a></li>';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques2+'</a></li>';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques3+'</a></li>';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques4+'</a></li>';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques5+'</a></li>';
			html +=	'		<li class="juti"><a href="#" class="alj">'+data[0].ques6+'</a></li>';
			html +=	'	</ul>';
			html +=	'	<a href="#" class="gengduo">查看更多 &gt;</a>';
			html +=	'</div>';
		}
		for(var i = 0;i<ajuti.length;i++){
			console.log(1)
			ajuti[i].index = i;
			ajuti[i].onmouseenter = function(){
				for(var j = 0;j<ajuti.length;j++){
					ajuti[j].className = 'juti';
				}
				this.className = 'juti juti-active';
			}
		}
		oQuestion.innerHTML = html;
	}
}


