$(document).ready(function() {
	$('#intro-blur').hide(0);
	$('#intro-des').hide(0);
	$("#screg").click(function(){
        $('html, body').animate({scrollTop : 1050},500);
        return false;
	});
	$("#melink").click(function(){
        $('html, body').animate({scrollTop : 450},500);
        return false;
	});
	$("#theme").click(function(){
		if ($('#theme input').is(':checked')){
			$('#theme i').addClass("fa-moon");
			$("#theme i").removeClass("fa-sun");
			$("body").css({"background":"#181818"});
			$("h1, h2, h3, h4, p, a").css({"color":"#F5F5F5"});
			$('.img1 img').attr("src","/portfolio/images/img-1-dark.png");
			$('#header img').attr("src","/portfolio/images/hbwhite.png");
			$("#header , #footer").css({"background": "rgba(172,172,172,0.33)"});
		} else {
			$('#theme i').addClass("fa-sun");
			$("#theme i").removeClass("fa-moon");
			$("body").css({"background":"#F5F5F5"});
			$("h1, h2, h3, h4, p, a").css({"color":"black"});
			$('.img1 img').attr("src","/portfolio/images/img-1-light.png");
			$('#header img').attr("src","/portfolio/images/hb.png");
			$("#header , #footer").css({"background": "rgba(0,0,0,0.33)"});
		}
	});
	$("#intro-des").click(function(){
		$('#intro-des').fadeOut(200);
	});
	$(".sp").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('sp');
	});
	$(".si").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('si');
	});
	$(".ai").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('ai');
	});
	$(".sd").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('sd');
	});
	$(".ms").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('ms');
	});
	$(".hm").click(function(){
		$('#intro-des').fadeIn(200);
		$("#graphic").removeAttr('class');
		$("#graphic").addClass('hm');
	});
	$('#intro-blur').click(function(){
		$('#intro-blur').fadeOut(200);
		
	});
	$("#voma").click(function(){
		$('#intro-blur').fadeIn(200);
		$("#i1").addClass("intro");
		$('#i1 img').attr("src","/portfolio/images/voma.png");
		$("#i2").removeClass("intro");
		$("#i3").removeClass("intro");
		$("#i4").removeClass("intro");
	});
	$("#saint").click(function(){
		$('#intro-blur').fadeIn(200);
		$("#i1").addClass("intro");
		$('#i1 img').attr("src","/portfolio/images/saintl.png");
		$("#i2").addClass("intro");
		$('#i2 img').attr("src","/portfolio/images/saintd.png");
		$("#i3").addClass("intro");
		$('#i3 img').attr("src","/portfolio/images/saint2.png");
		$("#i4").removeClass("intro");
	});
	$("#sb").click(function(){
		$('#intro-blur').fadeIn(200);
		$("#i1").addClass("intro");
		$('#i1 img').attr("src","/portfolio/images/sb-1.png");
		$("#i2").addClass("intro");
		$('#i2 img').attr("src","/portfolio/images/sb-2.png");
		$("#i3").removeClass("intro");
		$("#i4").removeClass("intro");
	});
	
/*$("#").click(function(){
		$('#intro-blur').fadeIn(200);
		$("#i1").addClass("intro")
		$('#i1 img').attr("src","/portfolio/images/.png");
	});*/

});
