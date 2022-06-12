let dog = {
    color: "brown",
    breed: "chihuahua",
    size: "small"
}



let string = "size"

function compare(string , object) {
   for(let key in object) {
       if (object.key === string) {
           return true
       }else return false
   }
}

compare();