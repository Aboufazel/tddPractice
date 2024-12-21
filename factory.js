class Bicycle {
  constructor(customerName) {
    this.type = "Bicycle";
    this.customerName = customerName;
  }
  creating() {
    console.log(`${this.customerName}, your bicycle will be created in 1 week...`);
  }
}

class Car {
  constructor(customerName) {
    this.type = "Car";
    this.customerName = customerName;
  }
  creating() {
    console.log(`${this.customerName}, your car will be ready in 4 weeks...`);
  }
}

class Motorcycle {
  constructor(customerName) {
    this.type = "Motorcycle";
    this.customerName = customerName;
  }
  creating() {
    console.log(`${this.customerName}, your motorcycle will be ready in 2 weeks...`);
  }
}


class VehicleFactory {
  constructor() {
    this.vehicleMap = new Map();
  }

  registerVehicle(vehicleType, vehicleClass) {
    this.vehicleMap.set(vehicleType, vehicleClass);
  }

  createVehicle(vehicleType, customerName) {
    const VehicleClass = this.vehicleMap.get(vehicleType);
    if (!VehicleClass) {
      throw new Error("Invalid vehicle type!");
    }
    return new VehicleClass(customerName);
  }
}


  const factory = new VehicleFactory();  
  factory.registerVehicle("bicycle", Bicycle);
  factory.registerVehicle("car", Car);
  factory.registerVehicle("motorcycle", Motorcycle);

  const userInput = ["bicycle" , "car" , "motorcycle"];
  const customerName = ["Abbas" , "Ali" , "Nader"];
  userInput.map((info , index)=>{
    let vehicle = factory.createVehicle(info, customerName[index]);
    vehicle.creating();
  })
