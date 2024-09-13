class car{
    constructor(brand,model,year,color){
       this.brand = brand ,
       this.model = model ,
       this.year = year ,
       this.color = color
    }


getCarInfo(){
    return `${this.brand} ${this.model} (${this.year}) - ${this.color}` ;
}

getCarAge(){
    return 2024 - this.year + ` years old`;
}

}

const car1 = new car("Toyota", "Camry", 2015, "Black"); 
console.log(car1.getCarInfo())
console.log(car1.getCarAge())

const car2 = new car("Honda", "Civic", 2018, "White"); 
console.log(car2.getCarInfo())
console.log(car2.getCarAge())

const car3 = new car("Tesla", "ModelS", 2020, "Red"); 
console.log(car3.getCarInfo())
console.log(car3.getCarAge())