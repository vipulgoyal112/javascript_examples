
//1. one way to define a function, you can call this 
// A();
//function A () {}
//

function hello (name) {
	console.log("say Hello !!" + name);
}

/* reference a function to an object
var allImages = document.getElementsByTagName("img");
for (var i=0,len=allImages.length;i<len;i++) allImages[i].onclick=SayMyName;

when we want to pass the function reference to another function

function abc () {
	var fn = function () {
		console.log("fn function calling");
	};
	
	setTimeOut (1000, fn);
	xyz ('hi', fn);
}

function xyz (text, callback) {
	console.log("print text : " + text);
	callback();
}
*/
var refObj = function () {
	console.log("ref Object");
};

/*	creating a new function like this!!  at run time we need to perform some action
 	var allImages = document.getElementsByTagName('img');
 	for (var i=0,len=allImages.length;i<len;i++) allImages[i].onclick=new Function("alert('Hey, I am image #"+i+"...sweet, eh?')"); 
*/

var nwFuncCalling = new Function ('name',"console.log('hello ' + name)"); 