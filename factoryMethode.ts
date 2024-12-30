  interface creatingLine {
    creating():void
  }


  class car implements creatingLine {
     creating(): void {
         console.log('car been creating');
     }
}


class motorcycle implements creatingLine {
    creating(): void {
        console.log('car been creating');
    }
}


abstract class vehicleFactory {
    creating: creatingLine;

    abstract createVehicle(): void;
    abstract planCreating(): void;
  }
  

 class motocycleFactory extends vehicleFactory{
    createVehicle(): creatingLine {
        return new motorcycle()
    }

    planCreating(): void {
        this.creating = this.createVehicle()
        this.creating.creating()
    }
 }  


 class carFactory extends vehicleFactory{
    createVehicle(): creatingLine {
        return new car()
    }

    planCreating(): void {
        this.creating = this.createVehicle()
        this.creating.creating()
    }
 }