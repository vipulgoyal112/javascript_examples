/*
 * try in console log
 */

function car (make, model, color) {

//public variable
    this.make = make;
    this.model = model;
//private variable    
    var color1 = color;
    
    this.funColor = function () {
        return color1;
    };
}

var car1 = new car('2012', 'verna', 'blue');
var car2 = new car('2013', 'i20', 'orange');

//console.log("car1 make : " + car1.make + ", car1 model : " + car1.model + ", car1 color : " + car1.color);
//console.log("car2 make : " + car2.make + ", car2 model : " + car2.model + ", car2 color : " + car2.color);
//console.log("this make : " + this.make + ", this model : " + this.model + ", this color : " + this.color);
console.log("car1 color : "  + car1.funColor());
console.log("car2 color : "  + car2.funColor());

var x = function (name) {
    return name;
};

console.log("name : " + x("vipul"));
