function parentClass () {
    this.parent_name = "vipul";
    this.parent_method = function (args) {
        return args + " parent argument";
    };
    this.energy = 100;
}

function childClass () {
    this.child_name = "shue";
    this.child_method = function (args) {
        return args + " child argument";
    };
}

//it inherits all the properties of parent class
childClass.prototype = new parentClass ();
parentClass.prototype.energy1 = 200;
childClass.prototype.parent_method = function () {
    return "override method";
}
var instance1 = new childClass();
console.log("1 : " + instance1.parent_name + ", 2 : " + instance1.parent_method("Res: ") + ", 3 : " + instance1.child_name + ", 4: " + instance1.child_method("Res: ") );
console.log("prototype property : " + instance1.energy);
console.log("prototype property : " + instance1.energy1);