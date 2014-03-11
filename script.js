// En JS se trabaja con elementos como representaciones, no es lo mismo que un tag, tiene más propiedades
// Se trabaja con el api del documento de html
// Hay que embeber el código al final del documento, antes de cierre del body
// JQuery envuelve los elementos y les proporciona un api mas interesante y muchas funcionalidades.

// Hay animaciones como fadeIn() SlideUp(), etc. También se pueden crear animaciones con 'animate', que con json modifica las propiedades del css y 

// El punto también lo uso para concatenar funciones


// Aquí se definen las variables jquery para obtener los elementos del DOM sobre los que actuarán las animaciones

var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'), // Aquí se van a embeber los nuevos .item
	$post = $('.item').first(); // first() no funciona en js, sólo en $, obtiene el primer elemento de selector buscado


// Funciones con los efectos jQuery


function mostrarOcultarFormulario(){

	$list.slideToggle();
	$form.slideToggle();
	return false; // Es un prevent default, es importante

}

function agregarPost(){
	
	// Para hacer nuevo post
	var url = $url.val(), // Para traer el valor del la url del formulario
		titulo = $titulo.val(), // Para traer el valor del titulo del formulario
		$clone = $post.clone(); // Aquí se clona el item

	//Asignar al clone los nuevos valores
	
	$clone.find('.titulo_item a') // Buscar todas los a dentro de titulo item
		.text(titulo)
		.attr('href',url);
		$clone.hide();
		$list.prepend($clone); // Embeber el nuevo item en el contenido
		mostrarOcultarFormulario();
		$titulo.val(''); //Se setea a valor vacio
		$url.val(''); //Se setea a valor vacio
		$clone.slideDown(); // Se cambia fadeIn por slideDown
		return false; // Es un prevent default, es importante, para cancelar el submit de html
}

// Manejadores de eventos, Eventos o (listener)

$button.click(mostrarOcultarFormulario);
$form.on('submit', agregarPost);