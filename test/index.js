var test = require( 'tape' );
var randomArray = require("./..");

test( 'array of 10 objects', function( t ) {

 	var array = ["a","b","c","d","e","f","g","h","i","j"];

 	t.plan(1);

 	t.equal(randomArray(array,4).length, 4, "Array contains correct number of elements");
});



test( 'empty array', function( t ) {

 	var array = [];

 	t.plan(1);

 	t.equal(randomArray(array,4).length, 0, "Array contains no elements");
});

test( 'Requesting more elements than are contained in source array', function( t ) {

 	var array = ["a","b","c","d","e","f","g","h","i","j"];

 	t.plan(1);

 	t.equal(randomArray(array,15).length, 10, "Array contains the same number of elements as source");
});


test( 'request all of the source elements', function( t ) {

 	var array = ["a","b","c","d","e","f","g","h","i","j"];

 	t.plan(1);

 	t.deepEqual(randomArray(array,10).sort(), array.sort(), "request all of the elements");
});