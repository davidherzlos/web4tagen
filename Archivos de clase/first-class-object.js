// FUNCTIONS AS FIRST CLASS-OBJECTS



// Funciones creadas via literales

function suma (numero1, numero2) {
	add = numero1 + numero2;
	return add;
}



// Pueden ser asignadas a variables, entradas de arrays, y propiedades de otros objetos


var suma = function (numero1, numero2) {
	add = numero1 = numero2;
	return add;
}

var arreglo = [1,'String', true, function (numero1, numero2) {
	add = numero1 + numero2;
	return add;
}];


var objeto = {
	numero1: 1,
	numero2: 3,
	suma: function (numero1, numero2) {
		add = numero1 = numero2;
		return add;
	}
}



// Pueden ser pasadas como argumentos de otras funciones

suma (function (numero1, numero2) {
	add = numero1 + numero2;
	return add;
});


// Pueden ser retornadas como valor de funciones
// Pueden tener propiedades que pueden ser creadas y asignadas dinámicamente.


