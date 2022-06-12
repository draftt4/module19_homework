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
    console.log( `This electrical item have consumption`, this.power * this.workhours)
}



let laptopLG = new ElecricItems("50", "4");
laptopLG.year = 2021;
laptopLG.collor = "Green";
laptopLG.memory = "1 TB";

let frige = new ElecricItems("100" , "24");
frige.model = "Samsung";
frige.collor = "silver";
frige.hight = "2m";
frige.width = "1m";




console.log(laptopLG);
laptopLG.turnedOn();
laptopLG.consumption();

console.log(frige);
frige.turnedOn();
frige.consumption();

