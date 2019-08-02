handleCart();
handleScrollTop();

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
function handleScrollTop(){
	var oHeader = document.querySelector('.header .container');
	var isShow = false;
	window.onscroll = function(){
		if(getScrollTop() >= 400){
			if(!isShow){
				animate(oHeader,{height:100});
				isShow = true;				
			}
			oHeader.className = 'container fixed';
		}else{
			if(isShow){
				oHeader.className = 'container';
				isShow = false;				
			}
		}
	}
}

