var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number'? inc: 1; // Los metodos que obtienen su contexto con this, son llamados public methods
	}
};


// Acá el objeto se aumenta y se trabaja con la variable that, es interesante este código

var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number'? inc: 1;
	},
	double: function () {
		var that = this;
		var helper = function () {
			that.value = add(that.value, that.value);
		}
	helper();
	}
};

// esta es una función normal

function add (a,b) {
	return a + b;
}





