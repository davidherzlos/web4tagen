

A nivel de ejecución, en un namespace hay valores:

	1 Hay valores literales:

		1.1 Valores literales de tipos simples: son inmutables, son:
			numbers literals
			strings literals
			booleans (true, false) literals
			null literals
			undefined literal
		1.2 Valores literales de Objeto: colecciones mutables de valores referenciados
			Object { uno: 1, dos: 2}
			function name (){ return true;} //el nombre es opcional
			array [1,"Hola"]
			regexp ???

	2 Valores referenciados con names: las referencias guardan un valor en memoria:

		2.1 Variables: pueden contener una expresión, que redunda en un valor.
		2.2 Variables que referencian otras variables, propiedades, funciones, etc.

En el namespace, nuestro código top-level, que es nuestro algoritmo, está en el contexto del objeto window, por lo tanto, el namespace es el contexto global window

Los nombres son usados para sentencias, variables, parametros, nombres de propiedad, operadores y etiquetas

Cuando una función es declarada con unliteral con nombre, este se convierte en un método del objeto window, haciendo se disponible en todo el scope global.

El camino del objeto global window a un objeto, es crear el name del objeto en el namespace con una variable que vaya a su literal.


El objeto es una variable (name) con propiedades

Las propiedades son names locales, es decir en contexto del objeto. Son como variables, pero amarradas al contexto del objeto, esto las hace llamarse propiedades.
Cuando es una propiedad con una función, se le llama metodo



El camino del objeto global window a una propiedad del objeto creado es crear el name del objeto mediante una variable (name) en el namespace, y asignar una propiedad (name) que tecnicamente sería mejor llamar propiedad, porque está en el contexto del objeto o es un valor de el.

Las propiedades se  dividen en:

Propiedades (names) con cualquier valor o expresión
Propieedades (names) con funciones, que pasan a llamarse, métodos


Importante: Name (variable, función declaration) es usado en el contexto global, Name (Propiedad y metodo) es usado en el contexto un objeto, aunque técnicamente son lo mismo. En un objeto, como estructura solo puede haber referencias

Los objetos no tienen scope, tienen jerarquías.
Las funciones tienen scope, cuanso son declaradas lo crean el suyo, cuanso son invocadas, usan el scope donde fueron creadas.


Sobre el scope

Window es el contexto global de los literales de función declaradas

Las variables tienen scope
Las funciones tienen scope

Una expresión es una articulación de operaciones que involucran datos y operadores, que producen un valor

Para referenciar podemos usar variables que están sujetas a scope, propiedades que están atadas a un objeto o pertenecen a el, el es su contexto, y nombres de funciones, las funciones con nombre(no anonimas, están siemre en el namespace)

Una variable puede apuntar a un literal de función con o sin nombre
Una función con o sin nombre tienen scope
Una función con nombre o sin el siempre pueden ser referenciadas varias veces
Una función con o sin nombre, siempre puede
Una variable siempre es un name cuando está en un contexto global
una función es un nae cuando su contexto es el objeto global
Cuando una variable o una funció no estan en global, son propiedades de un objeto
El namespace es el contexto del objeto global
Los names en realidad son propiedades el objeto window.

Es importante poner odo en juego con la gramática
Como gramatica
como structuras de datos
como valores y ejecución

funciones (metodos)
variables (propiedades)
expresiones
sentencias

Sentencia de expresión: puede asignar valores a variables,
invokar un metodo, borrar una propiedad de un objeto, poner un literal, crear objeto.
La expresión es un conjunto de operaciones con operandos que arrojan un valor
