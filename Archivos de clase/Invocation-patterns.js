// Función Objeto, contructora de Objetos

function Objeto () {
	var propiedad;
	for (var i = arguments.length - 1; i >= 0; i--) {
		this["propiedad" + i] = arguments[i];
		console.log("propiedad" + i + ": " + arguments[i]);
	};
}



// Objetos construido por la función contructora Objeto

objeto1 = new Objeto('Hola',12342,[1,2,3,4,5],function(){alert("soy el objeto " + this)});



//Objeto construido por apply()

objeto2 = {}

Objeto.apply(objeto2,[1,2,3,"cuatro",function(){}])



//Objeto construido por call()

