/*
 * 1.this keyword is used only in the scope of a function, 
 * by creating the object of the function we can call them from outside
 * 
 * 2. without defining a variable like name, It treated as global, and can be accessible anywhere by name
 * 
 * 3. once a variable is defined inside a function, then it become local and cann't be access outside the class
 * 
 * 4.Here fun1 function in thisKeyword function is a priviledged function
 */
var thisKeyword = function () {
	console.log("Hello everyone!!!");
	this.count = 1;
	name = 'vipul';
	var avee = 'abc';
	this.fun1 = function () {
		console.log("calling fun1 function, access : " + avee);
	};
};

var fun = function () {
	var tk = new thisKeyword();
	console.log(tk.count);
	var tk1 = new thisKeyword();
	tk1.count++;
	console.log(tk1.count);
	var tk2 = new thisKeyword();
	console.log(tk2.count);
	console.log(this.count);
	//console.log(name + avee);
	console.log(tk2.fun1());
};