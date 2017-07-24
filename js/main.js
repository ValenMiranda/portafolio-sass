$(document).ready(function(){
	//Activar nav
	$(".button-collapse").sideNav();

	//configurar dropdown del nav
	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });

});

$(document).ready(function(){
	var imageItem = $('.slider li').length; //Números de slides
	var imagePos = 1;

	//Agregando paginación (círculos debajo de la imagen)
	for(var i = 1; i <= imageItem; i++){
		$('.pagination').append('<li><i class="fa fa-circle"></i></li>');
	}

	$('.slider li').hide();//Ocultar slides
	$('.slider li:first').show(); //Mostramos el primer slide

	//Funcion next
	$('.right span').click(nextSlider);

	setInterval(function(){
		nextSlider();
	},5000);

	// Función next para cambiar el slide la que siguiente
	function nextSlider(){
		if(imagePos >= imageItem){
			imagePos = 1;
		}else{
			imagePos++;
		}

		//estilos 
		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imagePos +')').css({'color':'#2A68A4'});

		$('.slider li').hide(); //ocultar slide
		$('.slider li:nth-child('+ imagePos +')').fadeIn(); //mostrar slide seleccionado
	};

	$('.left span').click(function(){
		if(imagePos <= 1){
			imagePos = imageItem;
		}else{
			imagePos--;
		}

		//estilos 
		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imagePos +')').css({'color':'#2A68A4'});

		$('.slider li').hide(); //ocultar slide
		$('.slider li:nth-child('+ imagePos +')').fadeIn(); //mostrar slide seleccionado
	});
});
