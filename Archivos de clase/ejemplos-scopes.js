// Con este ejemplo entiendes bién el alcanze de las funciones y variables

function outer () {
	var a = 1;
	function inner () {/*No hace nada*/}
	var b = 2;
	if(a == 1){
		var c = 3;
	}
}
outer();

// Para probar, llama a las funciones y variables en ualquier punto





