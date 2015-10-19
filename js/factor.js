$(document).on('ready', function(){ //cuando el documento este listo

	// Matriz de factores Xtraliena
	// ***********************************************************

	var tea = [ [0.34423847, 0.34820705, 0.34972654, 0.35037634, 0.35350018, 0.35474985, 0.36025390, 0.36071754, 0.36581559, 0.36805160, 0.37142724], 
				[0.17479538, 0.17777571, 0.17891988, 0.17940969, 0.18176867, 0.18271432, 0.18689253, 0.18724546, 0.19113598, 0.19284798, 0.19543895], 
				[0.09010987, 0.09262907, 0.09360096, 0.09401781, 0.09603198, 0.09684244, 0.10044354, 0.10074921, 0.10413369, 0.10563152, 0.10790803], 
				[0.06191749, 0.06431364, 0.06524225, 0.06564123, 0.06757480, 0.06835545, 0.07184154, 0.07213871, 0.07544169, 0.07691057, 0.07915100], 
				[0.04784603, 0.05020274, 0.05111993, 0.05151465, 0.05343281, 0.05420961, 0.05769417, 0.05799234, 0.06131735, 0.06280216, 0.06507361], 
				[0.03942465, 0.04177580, 0.04269445, 0.04309039, 0.04501930, 0.04580264, 0.04933056, 0.04963344, 0.05302052, 0.05453828, 0.05686573], 
				[0.03382779, 0.03619003, 0.03711643, 0.03751626, 0.03946860, 0.04026345, 0.04385588, 0.04416518, 0.04763229, 0.04919032, 0.05158409], 
				[0.03239243, 0.03472671, 0.03565655, 0.03605803, 0.03801987, 0.03881921, 0.04243582, 0.04274747, 0.04624337, 0.04781561, 0.05023250], 
				[0.02987643, 0.03222827, 0.03316597, 0.03357119, 0.03555398, 0.03636304, 0.04003101, 0.04034758, 0.04390315, 0.04550453, 0.04796843], 
				[0.02690002, 0.02928089, 0.03023199, 0.03064348, 0.03266070, 0.03348547, 0.03723457, 0.03755881, 0.04120612, 0.04285165, 0.04538604] ];



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
			c_cuota
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
	$('#tab1').css({'background-color': 'rgba(237, 0, 29, 0.86)'});

    $('#tab1').click(function(){
        $('#efec').fadeOut(function(){
            $('#tab2').css({'background-color': '#C1C1C1'});
            $('#tab1').css({'background-color': 'rgba(237, 0, 29, 0.86)'});
            $('#xtra').fadeIn();
        });    
    });

    $('#tab2').click(function(){
        $('#xtra').fadeOut(function() {
            $('#tab1').css({'background-color': '#C1C1C1'});
            $('#efec').fadeIn();
            $('#tab2').css({'background-color': 'rgba(237, 0, 29, 0.86)'});
        });                   
    });     
});






