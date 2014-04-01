// Un ejemplo perfecto de hoisting o elevación en funciones

var a = 5; // Se define la variable global

function madre () { // Se crea la funció madre, que definirá un nuevo scope
	var a = 1; // Se redefine la variable dentro del scope creado por madre
	hija(); // Se hace el callback de hija, una función que ni hemos definido, pero que funcionará, porque la función hija hace hoisting o elevación
	var b = 2; // La variable b hace hoisting, posteriormente toma su valor hasta ell punto de su declración
	if(a == 1){
		var c = 3;
	} // Los bloques, no crean nuevos scopes, sólo las funciones nombradas (resig)
alert(a); //El valor se imprime
alert(b); //El valor se imprime
alert(c); //El valor se imprime

function hija () {             // Se define la funcion hija dentro de madre, aunque apenas se definió, estuvo desde el principio disponibleen el scope actual, porque hizo hoisting
		alert("Hola soy hija");
	}
}
madre(); // Se ejecuta la función y se ve el resultado

// De aquí se derivan 5 cosas:

// 1. Las funciones dentro de una función, hacen hoisting, osea, se elevan y se hacen disponibles para ser lamadas en el scope donde fueron creadas

// 2. Las funciones creadas, a su vez, crean un nuevo scope, donde a su vez, si una función es creada, va a hacer hoisting en la función que la contiene, no importa en qué punto del cuerpo de la función se declare

// 3. Las funciones pueden tienen 2 relaciones con un scope: 

	// 3.1. cuando son declaradas, se hacen disponibles en el scope donde estan siendo creadas
	// 3.2. Crean un nuevo scope, donde el ciclo se puede repetir
	// 3.2. Cuando son llamadas, preguntan por su scope en donde fueron creadas, podrán acceder a las variables y parámetros de su scope y scopes mas globales, también, obvio, de su propio scope creado.

// 4. Para determinar problemas de scope, hay que pensar en el punto de referencia, es decir, desde donde se llama a la función, es decir, scope actual de ejecución

// 5. Los scopes si pueden tener una representación espacial.