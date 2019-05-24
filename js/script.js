//Gömmmer allting
var i = 1;
$(function(){
    $('#ruta2').hide();
	$('#ruta3').hide();
	$('#ruta4').hide();
	$('#ruta5').hide();
	$('#ruta6').hide();
	$('#ruta7').hide();
	$('#ruta8').hide();
	$('#ruta9').hide();
	$('#ruta10').hide();
	$('#knapp2').hide();
	$('#knapp4').hide();
	$('#resultat').hide();
	document.getElementById("fraganr").innerHTML =  i + "/5";
})
//Byter till nästa fråga, om i inte är mindre än 9 tar den bort nästa fråga knappen och ersätter den med rätta knappen istället.
$(document).ready(function(){
	$('#knapp3').on('click', function(){
		if (i<4) {
		$('#ruta' + i).slideUp(500);
		i++;
		$('#ruta' + i).slideDown(500);
		document.getElementById("fraganr").innerHTML =  i + "/5";
	}
	else {
		$('#ruta' + i).slideUp(500);
		i++;
		$('#ruta' + i).slideDown(500);
		document.getElementById("fraganr").innerHTML =  i + "/5";
		$('#knapp3').hide();
		$('#knapp4').show();	
	}
	})
});
//Ändrar till föregående frågan
$(function() {
	$('#knapp2').on('click', function(){
		$('#ruta' + i).slideUp(500);
		i--;
		$('#ruta' + i).slideDown(500);
		document.getElementById("fraganr").innerHTML =  i + "/5";
//Om i är mindre än 10 försvinner rätta knappen
		if (i<5) {
			$('#knapp4').hide();
			$('#knapp3').show();
		};
	})
});
//Gömmer/visar föregående frågan knappen
$(function(){
	$('#knapp3, #knapp2').on('click', function(){
		if (i>1) {
			$('#knapp2').show();
		} else { $('#knapp2').hide(); }
		
	})
})

function ratta(){
	//Först så sätter den svaren till olika variabler
		var fråga1 = $("input[name='fraga1']:checked").val();
		var fråga2 = $("input[name='fraga2']:checked").val();
		var fråga3 = $("input[name='fraga3']:checked").val();
		var fråga4 = $("input[name='fraga4']:checked").val();
		var fråga5 = $("input[name='fraga5']:checked").val();
 		var rätt = 0;
//sen rättar den. Här ändrar man bokstaven till antingen a, b eller c baserat på vilket som är rätt svar.
 		if (fråga1 == 'b') {
 			rätt++;
 		};
 		if (fråga2 == 'a') {
 			rätt++;
 		};
 		if (fråga3 == 'b') {
 			rätt++;
 		};
 		if (fråga4 == 'a') {
 			rätt++;
 		};
 		if (fråga5 == 'c') {
 			rätt++;
 		};

//sen byter den sida till sidan som visar antal rätt
 		$('#ruta').slideUp(500);
 		$('#resultat').slideDown(500);
//Sen skriver den ut rätt. 
 		document.getElementById("rätt").innerHTML = 'Rätt antal svar: ' + rätt;
	}
// Funktionen som får navbaren att vara sticky
$(document).ready(function() {
		   	var stickyNavTop = $('.nav').offset().top;

		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); 
			         
			    if (scrollTop > stickyNavTop) { 
			        $('.nav').addClass('sticky');
			    } else {
			        $('.nav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			$(window).scroll(function() {
				stickyNav();
			});
		});


// Sätter datumet som vi räknar ner till
var countDownDate = new Date("May 27, 2019 20:30:00").getTime();

// Uppdaterar nedräkningen varje sekund
var x = setInterval(function() {

  // Få dagens tid
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Tidsuträkningar i dagar, timmar, minuter och sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Visar uträkningen i id demo
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Skriver en text när programmeringen är klar
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TJEJHACK!";
  }
}, 1000);
// Säkrar fredriks mail genom att dela upp den i flera biter
var a = 'fredrik'
var b = 'johansson'
var c = 'ronneby'
$(function(){
	//lägger sedan ihop de och skriver ut de i htmlen
	document.getElementById("email").innerHTML = 'Email: ' + a + '.' + b + '@' + c + '.se';
})