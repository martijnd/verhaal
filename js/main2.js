	
		$(document).ready(function() {
			//Daadwerkelijke start van het document.
			var vid = document.getElementById("video1");
			var audio = document.getElementById("audio1");
			//jQuery.easing.def = "easeOutBounce";
			$(".button").hide();

			//verstop alle sections die we niet nodig hebben.
			hidePage("#section0");
			hidePage("#section1");
			hidePage("#section2");
			hidePage("#section3");
			hidePage("#section4");

			$("#introButton").hover(function(){
				$("#welcomeH1").html("By entering this website you are to be above 18 years of age.").fadeIn();
				console.log("DILDODAKSFSDFASa");
			},
			function(){
				$("#welcomeH1").html("WELCOME").fadeIn();
			});			

			$("#introButton").click(function(){
				section0();
			});

			function section0() {
				//Speel de eerste video
				vid.play();
				console.log("Playing video "+vid);
				//Speel eerste audio
				audio.play();
				console.log("Playing audio "+audio);
				$("#text1").hide().delay(300).fadeIn().delay(900).fadeOut();	// The president of the united states..
				$("#text2").hide().delay(1500).fadeIn().delay(1500).fadeOut(); 	// John Fitzgerald Kennedy
				$("#text3").hide().delay(3800).fadeIn().delay(700).fadeOut(); 	//..Is dead."
				$("#text4").hide().delay(5500).fadeIn().delay(1000).fadeOut();	// "The president is dead."
				$("#text5").hide().delay(8700).fadeIn().delay(2000).fadeOut();	// "Let us pray."
				
				//Als er een restart button heet en die wordt ingedrukt, restart de video.
				$("#restart1").click(function(){
				vid.play();
				console.log("Replaying");
				});
				
				//Als de video eindigd...
				audio.onended = function(){
					hidePage("#section0");
					showPage("#section1");
					console.log("Stage 1 cleared.");	
					section1();
				};

				
			}
			function section1(){
				var vidBut1 = document.getElementById("video2");
				var vidBut2 = document.getElementById("video3");
				var vidBut3 = document.getElementById("video4");

				var pressed;
				var pressed1 = false;
				var pressed2 = false;
				var pressed3 = false;

				$("#video2").hide();
				$("#video3").hide();
				$("#video4").hide();

				$( "#button1" ).click(function() {
					  pressed = "#button1";
					  console.log("Button 1 pressed.");

					  $("#button1").delay(800).fadeOut();
					  $("#button2").delay(600).fadeOut();
					  $("#button3").delay(400).fadeOut();
					  $("#textvak").delay(1000).fadeOut();

					  $("#video2").delay(1200).fadeIn();

					  vidBut1.play();
						console.log("playing video 2");
					  vidBut1.onended = function(){
					  	greyOut("#button1");
					  	$("#video2").delay(200).fadeOut();
					  	$("#button1").delay(400).fadeIn();
					  	$("#button2").delay(400).fadeIn();
					  	$("#button3").delay(400).fadeIn();
					  	$("#textvak").delay(400).fadeIn();
					  	pressed1 = true;
					  	if (pressed1){
					  		console.log("pressed 1 = true");
						}
						if ( pressed1 && pressed2 && pressed3 ) {
							console.log("DAS IST ALL TRUE JAAAAAAH");
							hidePage("#section1");
							showPage("#section2");
							console.log("Stage 2 cleared.");
							section2();
						}
					  }
				});

				$( "#button2" ).click(function() {
					  pressed = "#button2";
					  console.log("Button 2 pressed.");

					  $("#button1").delay(800).fadeOut();
					  $("#button2").delay(600).fadeOut();
					  $("#button3").delay(400).fadeOut();
					  $("#textvak").delay(1000).fadeOut();

					  $("#video3").delay(1200).fadeIn();

					  vidBut2.play();
					  console.log("playing video 3");

					  vidBut2.onended = function(){
					  	greyOut("#button2");
					  	$("#video3").delay(200).fadeOut();

					  	$("#button1").delay(400).fadeIn();
					  	$("#button2").delay(400).fadeIn();
					  	$("#button3").delay(400).fadeIn();
					  	$("#textvak").delay(400).fadeIn();
					  	pressed2 = true;
					  	if (pressed2){
					  		console.log("pressed 2 = true");
						}
						if ( pressed1 && pressed2 && pressed3 ) {
							console.log("DAS IST ALL TRUE JAAAAAAH");
							hidePage("#section1");
							showPage("#section2");
							console.log("Stage 2 cleared.");
							section2();
						}						
					  }
				});

				$( "#button3" ).click(function() {
					  pressed = "#button3";
					  console.log("Button 3 pressed.");

					  $("#button1").delay(800).fadeOut();
					  $("#button2").delay(600).fadeOut();
					  $("#button3").delay(400).fadeOut();
					  $("#textvak").delay(1000).fadeOut();
					  $("#video4").delay(1200).fadeIn();

					  vidBut3.play();
						console.log("playing video 4");
					  vidBut3.onended = function(){
					  	greyOut("#button3");
					  	$("#video4").delay(200).fadeOut();
					  	$("#button1").delay(400).fadeIn();
					  	$("#button2").delay(400).fadeIn();
					  	$("#button3").delay(400).fadeIn();
					  	$("#textvak").delay(400).fadeIn();
					  	pressed3 = true;
					  	if (pressed3){
					  		console.log("pressed 3 = true");
						}
						if ( pressed1 && pressed2 && pressed3 ) {
							console.log("DAS IST ALL TRUE JAAAAAAH");
							hidePage("#section1");
							showPage("#section2");
							console.log("Stage 2 cleared.");
							section2();
						}


					  }
				});

			}
			
			function section2(){
				//interview filmpje met audio
				var vid = document.getElementById("video5");
				//Speel de video
				vid.play();
				console.log("Playing video "+vid);

			vid.onended = function(){
					hidePage("#section2");
					showPage("#section3");
					console.log("Stage 3 cleared.");	
					section3();
				};		
			}
			
			function section3(){
				//interview filmpje met audio
				var vid = document.getElementById("video6");
				//Speel de video
				vid.play();
				vid.onended = function(){
					hidePage("#section3");
					showPage("#section4");
					console.log("Stage 4 cleared.");	
					section4();
				};	
			}

			function section4(){
				//interview filmpje met audio
				var vid = document.getElementById("video7");
				//Speel de video
				vid.play();
				vid.onended = function(){
					hidePage("#section4");
					showPage("#section5");
					console.log("Stage 5 clseared.");	
					section4();
				};	
			}
			
			//functie voor het verstoppen van een element.
			function hidePage(element){
				$(element).hide("blind","easeOutBounce",800);
				console.log("Hiding "+element);
				
			}
			//functie voor het laten zien van een element.
			function showPage(element){
				$(element).show();	
				showing = element;
				console.log("Showing "+showing);
			}
			
			function greyOut(element){
				$(element).css("opacity", "0.4");
			}
			
		});
		