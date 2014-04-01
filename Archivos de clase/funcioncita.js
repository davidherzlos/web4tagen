
var nombre = "Hola, soy un name global";

ob = {
	"nombre": 'Hola, soy un name del objeto ob, no del objeto window',
	"foo1": function () {
		alert(this.nombre);
		function () {
			alert("this.nombre");
		}
	}
}