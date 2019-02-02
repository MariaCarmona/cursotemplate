$(document).ready(function(){
	$('.ocultar').click(function(){
		$('.caja1').slideUp(500);
	});
	$('.mostrar').click(function(){
		$('.caja1').slideDown(500);
	});
});


$(document).ready(function(){
	$('.obtener').click(function(){
		var x = $('input[type=text]').val();
		if (x ===''){
			$('.error').text("Ingrese su nombre!").fadeTo(500, 1);
			$('input[type=text]').focus();
		}else{
			$('.error').fadeOut();

		}
	});

});