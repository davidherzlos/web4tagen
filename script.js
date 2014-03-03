// $(document).on("click", "listeners");

// $(#item).on("click"."opacidad");

// $function opacidad () {
// 	// body...
// }

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



