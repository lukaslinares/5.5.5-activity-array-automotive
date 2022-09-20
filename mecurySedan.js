//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassenger = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this. maximumSpeed = 160
        this.fuel= 10
        this.scheduleService = false
    }

loadPassengers(num){
     if(this.passengers < this.maximumPassenger){
         if((num + this.passengers) <= this.maximumPassenger){
             this.passengers = num;
            return this.passengers;
        } else {
             console.log( this. model + "" + this.make, "does not have enough room to fot all passengers ")
        } 
     } else {
         console.log(this.model + "" + this.make + "is full") 
        }
    }

start(){
    if(this.fuel > 0){
        console.log("My car has started");
        return this.started = true;
    } else {
        console.log("My car has run out of fuel");
        return this.started = false;
    }
}

scheduleService(mileage){
    if(this.mileage > 3000)
     this.scheduleService = ture;
     return this.scheduleService;
    }
}