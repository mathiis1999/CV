$(function(){
	var html = "";
	var i = 0;
	html+= "<table style='width: 100%;table-layout: fixed;'><tr>";
	$(".skill").each(function(){
		//alert($(this).text());
		html += "<td>"+$(this).text()+"</td>";
		i++;
		if(i%3 == 0)html+="</tr><tr>";
	});
	html+="</tr></table>";
	$("#print_skills").html(html);


	$( window ).resize(function() {
	  languages_size();
	});

	languages_size();

});

function languages_size(){
	if($( window ).width() < 992){ // < md
		$("#languages_print").show();
		$("#languages_screen").hide();
	}else{
		$("#languages_print").hide();
		$("#languages_screen").show();
	}
}


$(function(){
	$("#sendButon").on("click",function(){
		sendMail(null,null,$("#contact_message").value());
	});
});

function sendMail(from_mail,from_name, msg){
	var dest = "antoriche.ar@gmail.com";
	window.open('mailto:'+dest+'?subject=Contact&body='+msg);
}