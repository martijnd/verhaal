$(document).ready(function()
{
	vertel(1);
	$("#antwoord").delegate("a", "click", function(){
		vertel($(this).attr("data-stap"));
	});
});



function vertel(stap)
{
	$("#antwoord").empty();

	if(stap == 1){
		$("#verhaal").html("Wil je een plaatje van kaas zien?");

		$("#antwoord").append("<li><a href='#' data-stap='2'>Ja</a></li>");
		$("#antwoord").append("<li><a href='#' data-stap='6'>Nee</a></li>");
		
		$("img").hide();

	}
	if(stap == 2)
	{
		$("#verhaal").html("Wat voor soort kaas");
		$("#antwoord").append("<li><a href='#' data-stap='4'>Gatenkaas</a></li>");
		$("#antwoord").append("<li><a href='#' data-stap='5'>Normale kaas</a></li>");
		
	}
	
	if (stap == 4)
	{
		$("#gatenkaas").show();
		$("ul").hide();
		$("#verhaal").html("Gatenkaas");
	}
	
	if (stap == 5)
	{
		$("#normalekaas").show();
		$("ul").hide();
		$("#verhaal").html("Normale kaas");
	}
	
	if(stap == 6)
	{
		$("#verhaal").html("Jammer");
		$("ul").hide();
	}
}