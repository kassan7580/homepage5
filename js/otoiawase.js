$(function() {
	$(".btn").on("click",function(){
		var rightVal = 0;
		if($(this).hasClass("open")){
			rightVal = -300;
			$(this).removeClass("open");
		}else{
			$(this).addClass("open");
		}
		$("#navi").stop().animate({
			right:rightVal
		},200);
	});
});

document.getElementById('keywd').addEventListener('keyup',function(event) {
	if(document.getElementById('keywd').value.length === 3) {
		document.getElementById('keywd2').focus();
	}
},false);

document.getElementById('registBtn').addEventListener('click',function(event) {
	document.getElementById('keywd').style.backgroundColor='#ffffff';
	document.getElementById('keywd2').style.backgroundColor='#ffffff';
	if(document.getElementById('keywd').value.length < 0) {
		document.getElementById('keywd').style.backgroundColor='#ff0000';
		event.preventDefault();
	}
	if(document.getElementById('keywd2').value.length > 1 && document.getElementById('keywd2').value.length > 2) {
		document.getElementById('keywd2').style.backgroundColor='#ff0000';
		event.preventDefault();
	}
},false);

function check() {
	var num = document.getElementById('keywd2').value;
	if(isNaN(num)){
		alert('半角英数字で入力して下さい。');
	}
}
