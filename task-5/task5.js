class Items {
    constructor(power , workHours){
      this.power = power;
      this.workHours = workHours;
    }
    turnedOn() {
          console.log(`Item is rurned on`)
      }
      turnedOff() {
          console.log(`Item is rurned off`)
      }
      consumption() {
          console.log(`This is consumption`,this.power * this.workHours,`KW`)
      }
  }
  
  class Laptops extends Items {
      constructor(power,workHours,model, year ,color, memory){
          super(power,workHours);
          this.model = model;
          this.year = year;
          this.color = color;
          this.memory = memory;   
      }
    work() {
          console.log(`Working`);
      }
  }

  class KichenItems extends Items {
      constructor(power,workHours,model,width,hight,color){
        super(power,workHours)
        this.model = model;
        this.width = width;
        this.hight = hight;
        this.color = color;
      }
      cooling() {
          console.log(`I am Cooling`)
      }
  }

  let item1 = new Items("50" , "4");
  let laptop =  new Laptops("60","24","LG","2022","Green","1TB");
  let kichenItem =  new KichenItems("120","24","Samsung","1M","2m","Yellow");

  console.log(kichenItem);
  item1.turnedOn();
  kichenItem.consumption();
  kichenItem.cooling();

  console.log(laptop);
  item1.turnedOn();
  laptop.consumption();
  laptop.work();
  
  console.log(item1);
  item1.turnedOn();
  item1.consumption();