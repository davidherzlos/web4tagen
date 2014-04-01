// Un ejemplo de hoisting o elevación en variables

var x = "Soy un valor Global"; // La variable se define globalmente


function foo () { //Se crea una función o scope
	alert(x); // Esperaríamos que resultara valor Global, pero resulta undefined, la variable local, hizo hoisting
	var x = "Soy un valor Local"; // Se define la variable localmente, desde aquí empieza a estar en el scope
	alert(x); // Resultará en valor Local	

}
foo(); // Se ejecuta la función y se ve el resultado

// De aquí se derivan 6 cosas:

// 1. Las variables dentro de una función, hacen hoisting, osea, se elevan y anulan cualquier variable del mismo nombre que venga de un scope mas global

// 2. Las variables dentro de una función, sólo toman su valor y comienzan a estar en el scope hasta el momento de la declaración

// 3. Cuando creamos las variable dentro de una función, primero hacen el hoisting y anulan (con undefined) las variables del mismo nombre definidad globalmente. Posteriormente, tomarán su valor local en el scope, al llegar a la linea de su declaración.

// 4. Las variables pueden tienen tener varias relaciónes con un scope: 

	// 4.1. cuando son declaradas, se hacen disponibles en el scope donde estan siendo creadas
	// 4.2. Cuando son llamadas, preguntan por su scope en donde fueron creadas

// 5. Para determinar problemas de scope, hay que pensar en el punto de referencia, es decir, desde donde se llama a la variable, es decir, scope actual de ejecución

// 6. Los scopes si pueden tener una representación espacial.