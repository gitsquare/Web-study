$('.tab-list').children().click(function(){
	var id = $(this).index()
	$(this).addClass("liactive").siblings().removeClass("liactive");
	$('.tab-container').children().eq(id).show().siblings().hide();
});
$('.title-list').children().click(function(){
	$(this).css({'background-image':'url(./images/a12.png)'}).siblings()
	.css({'background-image':'url(./images/a11.png)'})
	var id = $(this).index();	
	$('.title-container').children().eq(id).show().siblings().hide();
});