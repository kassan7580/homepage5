$(function(){
	$(".btn").on("click",function(){
		var rightVal = 0;
		if($(this).hasClass("open")) {
			rightVal = -300;
			$(this).removeClass("open");
		} else {
			$(this).addClass("open")
		}
		$("#navi").stop().animate({
			right: rightVal
		},200);
	});
});

jQuery(document).ready(function($) {
	$("#dsplay").on("click",function() {
		$("#taA").toggle();
	});
});
