Una expresión es una articulación de operaciones que involucran datos y operadores, que producen un valor


En el namespace, nuestro código top-level, que es nuestro algoritmo, está en el contexto del objeto window, por lo tanto, el namespace es el contexto global window.

Importante: Name (variable, función declaration) es usado en el contexto global, Name (Propiedad y metodo) es usado en el contexto un objeto, aunque técnicamente son lo mismo. En un objeto, como estructura solo puede haber referencias.

Los nombres son usados para sentencias, variables, parametros, nombres de propiedad, operadores y etiquetas

A nivel de ejecución en el contexto del objeto global window (namespace) hay valores:

	1 Hay valores literales:

		1.1 Valores literales de tipos simples: son inmutables, son:
			numbers literals
			strings literals
			booleans (true, false) literals
			null literals
			undefined literal
		1.2 Valores literales de Objeto: colecciones mutables de valores referenciados
			Object { uno: 1, dos: 2}
			function name (){ return true;} //el nombre es opcional y sí, la función es un objeto y un valor al final
			array [1,"Hola"]
			regexp ???
		1.3 Expresiones ???

	2 Valores dentro de Names, que son valores referenciados (con nombres que viven en el namespace). Los names guardan los valores en memoria, para su posterior uso.

	Hay 2 tipos de names.


		2.1 Variables: hacen referencia a literales simples y de objeto; y también a expresiones. Pueden ser todos los valores. (contexto global)

			Una variable puede apuntar a un literal de función con o sin nombre
			
			Cuando una función es declarada con un literal con nombre, este se convierte en un método del objeto window, haciendo se disponible en todo el scope global.
			
			El camino del objeto global window a un objeto, es crear el name del objeto en el namespace con una variable que apunte a su literal.

			El objeto es una variable (name) con propiedades(como variables)

		2.2 Propiedades: son names pertenecientes a un objeto. (contexto del objeto, local), hay de 2 tipos.
			2.2.1 Propiedades: Son como variables, pero amarradas al contexto del objeto, esto las hace llamarse propiedades.
			2.2.2 Métodos: Cuando es una propiedad con una función, se le llama metodo.

			El camino del objeto global window a una propiedad del objeto creado es crear el name del objeto mediante una variable (name) en el namespace, y asignar una propiedad (name) que tecnicamente sería mejor llamar propiedad, porque está en el contexto del objeto o es un valor de el.
			
	3 Las variables pueden hacer referencia a otras variables, propiedades o métodos.