function ElecricItems(power, workhours) {
    this.power = power;
    this.workhours = workhours;
}  

ElecricItems.prototype.turnedOn = function() {
   console.log(`Item is rurned on`)
}

ElecricItems.prototype.turnedoff = function() {
   console.log(`Item is rurned off`)
}

ElecricItems.prototype.consumption = function() {
    console.log( `This electrical item have consumption`, this.power * this.workhours, `KW`)
}



let laptop = new ElecricItems("50", "4");
laptop.model = "LG"
laptop.year = 2021;
laptop.collor = "Green";
laptop.memory = "1 TB";

let fridge = new ElecricItems("100" , "24");
fridge.model = "Samsung";
fridge.collor = "silver";
fridge.hight = "2m";
fridge.width = "1m";




console.log(laptop);
laptop.turnedOn();
laptop.consumption();

console.log(fridge);
fridge.turnedOn();
fridge.consumption();

