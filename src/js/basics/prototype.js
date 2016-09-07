function player () {
    this.name;
    this.hitpoints = 100;
    this.attack = function (opponent) {
        opponent.hitpoints -= 10;
    };
}

var p1 = new player();
var p2 = new player();

p1.name = "vipul";
p2.name = "carlos";

p1.attack(p2);

//console.log(p1.name + " has hitpoints " + p1.hitpoints);
//console.log(p2.name + " has hitpoints " + p2.hitpoints);

player.prototype.energy = 200;

player.prototype.heal = function (opponent) {
    opponent.hitpoints += 5;
    opponent.energy += 5;
};

p1.heal(p2);

console.log(p1.name + " has hitpoints " + p1.hitpoints);
console.log(p2.name + " has hitpoints " + p2.hitpoints);

console.log(p1.energy + " energy");
console.log(p2.energy + " energy");




