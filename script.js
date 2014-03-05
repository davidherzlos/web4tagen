// En JS se trabaja con elementos como representaciones, no es lo mismo que un tag, tiene más propiedades
// Se trabaja con el api del documento de html

var $form =$('#formulario'),
	$titulo =$('#titulo'),
	$url =$('#url'),
	$button =$('#mostrar-form'),
	$list =$('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){

	$form.slideToggle();
	return false; // Es un prevent default
}

function agregarPost(){
	var url = $url.val(),
	titulo = $titulo.val(),
	$clone = $post.clone();

	return false; // Es un prevent default
}

// Eventos
$button.click(mostrarFormulario);
form.on('submit', agregarPost);



