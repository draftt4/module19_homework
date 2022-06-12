
function Laptop (color, memory , price) {
    this.color = color;
    this.memory = memory;
    this.price = price;
    this.infolaptop = function() {
        console.log(`Color - ${this.color} , Mamory - ${this.memory} gb , Price - ${2900} Euro `)
    }
}

let samsung = new Laptop("green" , 250, 2900);

for(let key in samsung) {
    if (samsung.hasOwnProperty(key)) {
        console.log(key)
    }

}

//samsung.infolaptop();
samsung.hasOwnProperty("color");