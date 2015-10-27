window.onload = function() {
	document.getElementById("popup").onclick = function(){ 
		window.open('factor.html','Calculadora','width=443,height=397,menubar=no,scrollbars=no,toolbar=no,location=no,directories=no,resizable=no')
	}

} 


// $(document).on('ready', function(){ //cuando el documento este listo

// 		$('#popup').click(function(e){
// 			e.preventDefault();
// 			$(this).load('./factor.html');
// 		});

// });