//Gömmmer allting
$(function(){
	$('#ruta1').hide();
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
})
var i = 1;
//Visar frågerutan
$(function() {
    $('#ruta').hide();
    $('#knapp').on('click', function() {
    	$('#hit').slideUp(500);
        $('#ruta1, #ruta').slideDown(500);
        document.getElementById("fraganr").innerHTML = i + "/10";
    });
});
//Byter till nästa fråga, om i inte är mindre än 9 tar den bort nästa fråga knappen och ersätter den med rätta knappen istället.
$(document).ready(function(){
	$('#knapp3').on('click', function(){
		if (i<9) {
		$('#ruta' + i).slideUp(500);
		i++;
		$('#ruta' + i).slideDown(500);
		document.getElementById("fraganr").innerHTML =  i + "/10";
	}
	else {
		$('#ruta' + i).slideUp(500);
		i++;
		$('#ruta' + i).slideDown(500);
		document.getElementById("fraganr").innerHTML =  i + "/10";
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
		document.getElementById("fraganr").innerHTML =  i + "/10";
//Om i är mindre än 10 försvinner rätta knappen
		if (i<10) {
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
		var fråga6 = $("input[name='fraga6']:checked").val();
		var fråga7 = $("input[name='fraga7']:checked").val();
		var fråga8 = $("input[name='fraga8']:checked").val();
		var fråga9 = $("input[name='fraga9']:checked").val();
		var fråga10 = $("input[name='fraga10']:checked").val();
 		var rätt = 0;
//sen rättar den. Här ändrar man bokstaven till antingen a, b eller c baserat på vilket som är rätt svar.
 		if (fråga1 == 'a') {
 			rätt++;
 		};
 		if (fråga2 == 'a') {
 			rätt++;
 		};
 		if (fråga3 == 'b') {
 			rätt++;
 		};
 		if (fråga4 == 'b') {
 			rätt++;
 		};
 		if (fråga5 == 'a') {
 			rätt++;
 		};
 		if (fråga6 == 'b') {
 			rätt++;
 		};
 		if (fråga7 == 'c') {
 			rätt++;
 		};
 		if (fråga8 === 'b') {
 			rätt++;
 		};
 		if (fråga9 == 'c') {
 			rätt++;
 		};
 		if (fråga10 == 'a') {
 			rätt++;
 		};
//sen byter den sida till sidan som visar antal rätt
 		$('#ruta').slideUp(500);
 		$('#resultat').slideDown(500);
//Sen skriver den ut rätt. 
 		document.getElementById("rätt").innerHTML = 'Rätt antal svar: ' + rätt;
	}





