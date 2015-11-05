$(document).on('ready', function(){ //cuando el documento este listo

	// Matriz de factores Xtraliena
	// ***********************************************************

	var tea = [ [0.34334, 0.34588, 0.34820, 0.35161, 0.35274, 0.35556, 0.35812, 0.35969, 0.36272, 0.36473, 0.36777, 0.37010], 
				[0.17433, 0.17633, 0.17812, 0.18078, 0.18166, 0.18387, 0.18587, 0.18711, 0.18949, 0.19108, 0.19348, 0.19533], 
				[0.08987, 0.09161, 0.09318, 0.09550, 0.09627, 0.09822, 0.10000, 0.10109, 0.10322, 0.10464, 0.10680, 0.10847], 
				[0.06175, 0.06344, 0.06494, 0.06720, 0.06795, 0.06985, 0.07160, 0.07268, 0.07478, 0.07619, 0.07834, 0.08001], 
				[0.04771, 0.04939, 0.05088, 0.05313, 0.05389, 0.05580, 0.05755, 0.05864, 0.06077, 0.06221, 0.06440, 0.06610], 
				[0.03932, 0.04101, 0.04250, 0.04477, 0.04553, 0.04747, 0.04926, 0.05037, 0.05255, 0.05402, 0.05628, 0.05803], 
				[0.03373, 0.03544, 0.03694, 0.03924, 0.04002, 0.04200, 0.04383, 0.04497, 0.04721, 0.04872, 0.05105, 0.05286], 
				[0.03223, 0.03398, 0.03549, 0.03780, 0.03859, 0.04058, 0.04242, 0.04357, 0.04583, 0.04736, 0.04971, 0.05154], 
				[0.02976, 0.03149, 0.03301, 0.03535, 0.03614, 0.03817, 0.04004, 0.04121, 0.04351, 0.04507, 0.04747, 0.04934], 
				[0.02680, 0.02854, 0.03009, 0.03247, 0.03328, 0.03535, 0.03727, 0.03847, 0.04084, 0.04244, 0.04491, 0.04684] ];



	// Calculando Xtralinea
	// ***********************************************************

	$("#icalcular").click(function () {
		var x = $("#cuota")[0].selectedIndex;
		var y = $("#interes")[0].selectedIndex;
		var z = $("input:text[name=nvalor]").val();

		var posicion = tea[x][y];

		var valor = z * posicion;

		// console.log(valor);
		// ci.innerText = valor.toFixed(2);	
		$('#ci').text(valor.toFixed(2));	
	});	

	$("#iborrar").click(function(){
		$('#ci').text("0.00");
		$("input:text[name=nvalor]").val("0");
	});


	// Calculando Retiro de Efectivo
	// ***********************************************************

	var tea_tc = [0.8999, 0.7999];

	$("#icalcular2").click(function () {
		var z = $("#tc")[0].selectedIndex;
		
		if (z == 0 || z == 5 || z == 10){
			z = 0;
		}
		else{
			z = 1;
		};

		var c_valor = parseFloat($("input:text[name=nvalor2]").val());
		var c_cuota = parseFloat($("input:text[name=ncuota]").val());

		if (c_cuota >= 2 && c_cuota <=36){
			c_cuota;
		}
		else{
			alert("Debes elegir entre 2 a 36 Cuotas Gracias :)");
			return;
		};


		var tem_tc = (Math.pow((1+tea_tc[z]), (1/12)))-1;

		var factor = tem_tc*(Math.pow((1+tem_tc),c_cuota)) / ((Math.pow((1+tem_tc),c_cuota))-1)

		var can = factor * c_valor;

		$('#ci2').text(can.toFixed(2));
		
		$("#iborrar2").click(function(){
			$('#ci2').text("0.00");
			$("input:text[name=ncuota]").val("0");
			$("input:text[name=nvalor2]").val("0");
		});
	});

	

	// Efecto TABS
	// ***********************************************************

	$('#efec').hide();
	$('#tab1').css({'background': '#ED001D'});

    $('#tab1').click(function(){
        $('#efec').fadeOut(function(){
            $('#tab2').css({'background': '#C1C1C1'});
            $('#tab1').css({'background': '#ED001D'});
            $('#xtra').fadeIn("slow");
        });    
    });

    $('#tab2').click(function(){
        $('#xtra').fadeOut(function() {
            $('#tab1').css({'background': '#C1C1C1'});
            $('#efec').fadeIn("slow");
            $('#tab2').css({'background': '#ED001D'});
        });                   
    });     
});






