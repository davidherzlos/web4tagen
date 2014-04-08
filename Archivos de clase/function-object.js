funciones


Los objetos tipo objeto, tienen jerarquías.


Objeto tipo function

Las funciones tienen scope, cuanso son declaradas, crean su propio scope, cuanso son invocadas, usan el scope donde fueron creadas.

Sobre el scope

Window es el contexto global de los literales de función declaradas

Las variables tienen scope
Las funciones tienen scope

Para referenciar podemos usar variables que están sujetas a scope, propiedades que están atadas a un objeto o pertenecen a el, es su contexto. También nombres de funciones, las funciones con nombre (no anonimas, están siempre en el namespace)

Una función con o sin nombre tienen scope, siempre y cuando estén dentro de uan variable
Una función con nombre o sin el siempre pueden ser referenciadas varias veces, con una variable
Una función con nombre, es un name en el contexto global
Cuando una variable o una funció no estan en global, son propiedades de un objeto
El namespace es el contexto del objeto global
Los names en realidad son propiedades el objeto window.

Formas de entender javascript

Como elementos con gramatica (sentencias, expresiones, names, blocks, data structures, functions, etc)
Como structuras de datos (names, values, expresions, objects, propierties, methods, etc.)
Como valores y ejecución (Values, Object, Expresions, statements, if, for, while, which, etc.)


Sentencia de expresión: 
LO que entiendo, 
puede asignar valores a variables,
invokar un metodo, borrar una propiedad de un objeto, poner un literal, crear objeto.
La expresión es un conjunto de operaciones con operandos que arrojan un valor
