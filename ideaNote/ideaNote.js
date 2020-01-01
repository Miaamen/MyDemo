var i = $(".last h2").html();
$("#btn-ready").click(function(){
	i++;
	if(i < 10 && i[0] != '0'){
		i = "0" + i;
	}
			
	$(".box").last().removeClass("last");
	console.log(i);
	$(".container").append('<div class="box">'+
		'<h2>'+i+'</h2>'+'<h3>Our Idea Note</h3>'+'<p>'+$(".input-note").val()+'</p></div>');
	$(".input-note").val("");
	$(".box").last().addClass("last");
});
