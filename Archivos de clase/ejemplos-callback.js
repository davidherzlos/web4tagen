function useless(callback){
	return callback();
}

var text = 'Domo Arigato';

assert(useless(function(){return text;}) === text, "The useless function works" + text);



function useless(callback){
	return callback();
}

var text = 'Domo Arigato';

assert(useless(function(){return text;}) === text, "The useless function works" + text);