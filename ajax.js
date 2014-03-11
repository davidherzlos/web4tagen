// Un poco de ajax
$(function(){
	$.get('logos_footer.html', function(codiguito){
		$('footer').append(codiguito);
	});

	$get('usuario.json', function (info) {
		console.log(info);
	});

});