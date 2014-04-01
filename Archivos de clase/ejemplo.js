//Función declarada, son permitidas en el function bady del programa

function id (argument) {
	// body...
}

//función como expresión, tienen que ser parte de una expresión

function idopcional (argument) {
	// body...
}

Para diferenciar expresiones de declaraciones, ECMAScript se basa en el contexto de la función 







undefined
localStorage
Storage {length: 0}
ls = localStorage
Storage {length: 0}
ls.nombre = 'David Antonio';
"David Antonio"
ls.apellido = 'Ordoñez Cornejo';
"Ordoñez Cornejo"
ls
Storage {apellido: "Ordoñez Cornejo", nombre: "David Antonio", length: 2}
ls.edad = 28
28
ls
Storage {apellido: "Ordoñez Cornejo", edad: "28", nombre: "David Antonio", length: 3}
ls.length
3
ls.key(0);
"apellido"
ls.key(1);
"edad"
ls.key(2);
"nombre"
ls.key(3);
null
ls.getItem(0);
null
ls.getItem(2);
null
for (var i=0; i < ls.length: i++) {
     var nombre = ls.key(i);
     var valor = ls.getItem(nombre);
     console.log(nombre + " = " + valor);
}
SyntaxError: Unexpected token :
for (var i=0; i < ls.length; i++) {
     var nombre = ls.key(i);
     var valor = ls.getItem(nombre);
     console.log(nombre + " = " + valor);
}
apellido = Ordoñez Cornejo VM266:5
edad = 28 VM266:5
nombre = David Antonio VM266:5
undefined
console.log('Los keys del array del local storage, están en orden alfabetico');
Los keys del array del local storage, están en orden alfabetico VM288:2
undefined

