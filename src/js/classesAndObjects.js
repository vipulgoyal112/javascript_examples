/*var Employee = function () {
	this.getCount = function () {
		return this.count;
	};
	this.count += 1;
};
Employee.prototype.count = 3;

var SecondEmployee = function () {
	this.getCount = function () {
		return SecondEmployee.count;
	};
	SecondEmployee.count += 1;
};
SecondEmployee.count = 3;*/


var Employee = (function() {
	var sharedVariable = 0;

    function Employee() {
        ++sharedVariable;
        console.log("sharedVariable = " + sharedVariable);
    }

    return Employee;
})();

var jsClassesAndObjectCall = function () {
	
	/*var emp = [];
	for (var i = 0; i < 3 ; i++) {
		emp[i] = new Employee();
		console.log("get count is : " + emp[i].getCount());
	}
	
	var secEmp = [];
	for (var i = 0; i < 3 ; i++) {
		secEmp[i] = new SecondEmployee();
		console.log("get count is : " + secEmp[i].getCount());
	} */
	
	/*var a = new abc();
	console.log("a.count" + a.count);
	console.log("a.prototype.count" + abc.prototype.count);
	abc.prototype.count += 1;
	console.log("a.count" + a.count);
	a.count += 1; 
	console.log("a.count" + a.count);
	console.log("a.prototype.count" + abc.prototype.count);*/
	
	console.log(new Employee());
	console.log(new Employee());
	console.log(new Employee());
	console.log(new Employee());
};


/*var abc = function () {
	
};

abc.prototype.count = 1;*/

/*
var Employee = function (name,age) {
	
	this.name = name;
	this.age = age;
	this.getBoth = function () {
		return name + age;
	};
	this.SSN = "456";
	getSSN = function () {
		return SSN;
	};
};

Employee.prototype.getName = function () {
	return this.name;
};

Employee.prototype.getSSN = function () {
	return this.SSN;
};


Employee.prototype.getAge = function () {
	return this.age;
};

//Employee.SSN = 567;
Employee.prototype.rollNo = 123;

var jsClassesAndObjectCall = function () {
	var emp = new Employee('vip',25);
	var emp2 = new Employee('ank', 46);
	
	
	console.log("emp.SSN" + emp.SSN);
	console.log("emp2.SSN" + emp2.SSN);
	
	
	console.log("emp.getSSN()" + emp.getSSN());
	console.log("emp2.getSSN()" + emp2.getSSN());
	
	console.log("Employee.SSN " + Employee.SSN);
	console.log("emp.getSSN() " + emp.getSSN());
	
	
	
	console.log("prototype getName" + emp.getName());
	console.log("prototype getAge" + emp.getAge());
	
	console.log("2prototype getName" + emp2.getName());
	console.log("2prototype getAge" + emp2.getAge());
	
	console.log("prototype rollNo" + emp.rollNo);
	console.log("2prototype rollNo" + emp2.rollNo);
	
	console.log("prototype getBoth" + emp.getBoth());
	console.log("ssn" + emp.SSN);
	console.log("prototype rollNo" + emp.rollNo);
	
	console.log("Employee.SSN " + Employee.SSN);
	console.log("Employee.prototype.rollNo" + Employee.prototype.rollNo);
};*/