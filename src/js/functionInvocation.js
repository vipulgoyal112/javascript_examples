/*
*Function invocation
*/

/*
 *1. simple way of calling a function
 */
function temp() {
	alert("simple fun temp");
}
1.temp();
2.new temp();
3.temp.call();
4.temp.apply();

/*
 *2. only to call temp1 function after its definition
 */
var temp1 = function () {
	alert("second way to define function is temp1");
};
temp1();
/*
 * 3.anonyous function
 */
function f1 () {
	console.log("Hi" + new function () {console.log("Everyone");});
}

function f2 (t1) {
	console.log(this.name);
	console.log("Hi " + t1 + new function () {console.log("Everyone");});
}
/*
 * call method
 */
var person = {"name" : "vipul"};
f2.call(person, "abc");
/*
 * apply : we can make an array and pass it in function
 */
f2.apply(person, ["vipul"]);

