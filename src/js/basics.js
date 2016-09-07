
var myFirstFunction = function () {
	//console.log("My First Function button click");
	alert("button click");
};

var myComment = function () {
	alert("//single line commment\n/*Multiline comment\n1.\n2.*/");
};

var jsDataType = function () {
	var x; //x is undefined
	var y = 12; //y is a number
	var z = 'a String'; //z is a string
	var k = 2;
	
	show();
	show("x is " + x);
	show("y is " + y);
	show("z is " + z);
	show("k is " + k);
	x = y + z;
	show("Now x is " + x);
	show('show');
	
};
var aGlobal = "";
var show = function(outpt) {
	if (outpt == undefined) {
		aGlobal = "";
		return;
	}
	
	if (outpt == 'show') {
		document.getElementById("jq_outpt").innerHTML = aGlobal;
		return;
		//return a;
	}
	aGlobal = "/n" + outpt;
};

var myArray = function () {
	//Good way to define an array
	var arr = ['a','b','c'];
	arr.push('d');
	
	console.log("var arr = ['a','b','c'];");
	for (var x in arr) {
		console.log(arr[x]);
	}
	
	var arr1 = new Array;
	arr1.push('a');
	arr1.push('b');
	arr1.push('c');
	
	console.log("var arr1 = new Array;");
	for (var x in arr1) {
		console.log(arr1[x]);
	}
	
};

var myJsonWayToDefineObject = function () {
	var person = {
		first : 'vipul',
		last : 'goel'
	};
	console.log("First Name : " + person.first + " Last Name : " + person.last);
};

var myJavaObjectsPropertiesAndMaethods = function () {
	var person = {
		first : 'vipul',
		last : 'goel',
		getName : function () {
			return this.first;
		}
	};
	console.log("First Name : " + person.first + " Last Name : " + person.last);
	console.log("calling getName Method : " + person.getName().toUpperCase() + " Length : " + person.getName().length);
};

var person = function (gender) {
	this.gender = gender;
};
person.prototype.sayGender = function () {
	alert(this.gender);
};


var myJavaScriptClassesAndProperties = function () {
	
	var person1 = new person('Male');
	var genderTeller = person1.sayGender;
	 
	person1.sayGender(); // alerts 'Male'
	genderTeller(); // alerts undefined
	alert(genderTeller === person1.sayGender); // alerts true
	alert(genderTeller === person.prototype.sayGender); // alerts true

};

var myRegularExpression = function () {
	var text ="Hi, This is vipul";
	var regExp = new RegExp ("h","i");
	//var regExp2 = new RegExp ("h","g");
	//var regExp3= new RegExp ("h","gi");
	
	//console.log(text.match(regExp));
	//console.log(text.match(regExp2));
	//console.log(text.match(regExp));
	console.log(text.match("/h/i"));
	
}




