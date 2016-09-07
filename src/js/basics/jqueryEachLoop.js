/*
 * In jquery each loop,
 * 
 * 1. return work as 'continue'
 * 2. return false work as 'break'
 * 
 */

// directly run this function in firebug

function f1 () {
	$.each( ['a','b','c','d'], function(i, l){
		if (i == 0) {    
		    console.log( "Index #" + i + ": " + l );
		} else if (i == 1) {
		    return;
		    console.log( "Index #" + i + ": " + l );
		} else {
		    console.log( "Index #" + i + ": " + l );
		    return false;
		}
	});
}