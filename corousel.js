	var b=['i1.jpg','i2.jpg','i3.jpg'];
  	var d=['i2.jpg','i3.jpg','i1.jpg'];
  	var c=0;
  	var a;
  	abc();  	
  	function abc()
  	{
  	a=setInterval(slideshow,2000);
  	function slideshow(){
  		switch(c%3)
  	{
  		case 0:
  		$("#a0").css('background-color',"black");
  		$("#a1").css('background-color',"grey");
  		$("#a2").css('background-color',"grey");
  		break;
  		case 1:
  		$("#a1").css('background-color',"black");
  		$("#a0").css('background-color',"grey");
  		$("#a2").css('background-color',"grey");
  		break;
  		case 2:
  		$("#a2").css('background-color',"black");
  		$("#a1").css('background-color',"grey");
  		$("#a0").css('background-color',"grey");
  		break;
  	}
  		$(".imgstyle").attr("src",b[c%3]);		
  		$(".imgstyle").animate({width: "0px"},2000,"swing",reset);  	
  		setTimeout(function(){$(".imgstyle1").attr("src",d[c%3]); 	
  		c++;},300);
  	}}
  	function reset()
  	{
  		$(".imgstyle").css("width","100%");
  	}
  	$(".btn-left").click(left);
  	$(".btn-right").click(right);
  	function left()
  	{
  		c-=1;
  		$(".imgstyle").stop();
  		$(".imgstyle").attr("src",b[c%3]);
  		$(".imgstyle").css("width","100%");
  		clearInterval(a);
  		abc();
  	}
  	function right()
  	{
  		c+=1;
  		$(".imgstyle").stop();
  		$(".imgstyle").attr("src",b[c%3]);
  		$(".imgstyle").css("width","100%");  		
  		clearInterval(a);
  		abc();
  	}
  	$("#a0").click(function(){
  		c=0;
  		$(".imgstyle").stop();
  		$(".imgstyle").attr("src",b[c%3]);
  		$(".imgstyle").css("width","100%");
      $("#a0").css('background-color',"black");
      $("#a1").css('background-color',"grey");
      $("#a2").css('background-color',"grey");
  		clearInterval(a);
  		abc();
  	});
  	$("#a1").click(function(){
  		c=1;
  		$(".imgstyle").stop();
  		$(".imgstyle").attr("src",b[c%3]);
  		$(".imgstyle").css("width","100%");
      $("#a1").css('background-color',"black");
      $("#a0").css('background-color',"grey");
      $("#a2").css('background-color',"grey");
  		clearInterval(a);
  		abc();
  	});
  	$("#a2").click(function(){
  		c=2;
  		$(".imgstyle").stop();
  		$(".imgstyle").attr("src",b[c%3]);
  		$(".imgstyle").css("width","100%");
      $("#a2").css('background-color',"black");
      $("#a1").css('background-color',"grey");
      $("#a0").css('background-color',"grey");
  		clearInterval(a);
  		abc();
  	});
