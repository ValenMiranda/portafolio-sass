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

	$('.slider li').hide();//Ocultar slides
	$('.slider li:first').show(); //Mostramos el primer slide

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

	$('.left span').click(function(){
		if(imagePos <= 1){
			imagePos = imageItem;
		}else{
			imagePos--;
		}

	});
};

});