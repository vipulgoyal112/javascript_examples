/* confusion : if this.name = "abc", can access outside function then why in callType function it is only work for function.
 * that means as we are passing this (person) object as a reference so this object will work only for person object
 */

var person = {name : "vipul", age : "25", salary : "500"};

function callType (name, age, salary) {
	console.log("Before Helllo All I Am callType" + this.name + ", My age : " + this.age + ", salary : " + this.salary);
	this.name = name;
	this.age = age;
	this.salary = salary;
	console.log("After Helllo All I Am callType" + this.name + ", My age : " + this.age + ", salary : " + this.salary);
}

function callingFun () {
	callType.call(person, "Anshul", "30", "1000");
	console.log("Helllo All I Am callingFun" + this.name + ", My age : " + this.age + ", salary : " + this.salary);
	console.log("Helllo All I Am person" + person.name + ", My age : " + person.age + ", salary : " + person.salary);
}

function f1 () {
	this.txt = "hi";	//global var
	t1 = "t1";			//global var
	var t2 = "t2";		//local var : can't access outside f1
}

function f2 () {
	f1();
	console.log("print : " + this.txt);
	console.log("print : " + t1);
	//console.log("print : " + t2);
}

$(document).ready(function() {
	$(".jq_tag").click( function () {
		console.log("t1 value : " + $(this).attr("t1"));
	});
});