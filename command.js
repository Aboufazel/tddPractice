  class Tv {
    turnOn() {
        console.log("tv is turn on");
      }
    
    turnOff() {
        console.log("tv is turn off");
      }
  }


  class Remote {
      constructor(){
        this.command = null
      }

      setCommand(command){
        this.command = command
      }

      pressKey(){
        this.command.execute()
      }
  }


  class TurnOnTv {
    constructor(tv){
        this.tv = tv
    }

    execute(){
        this.tv.turnOn()
    }
  }


  class TurnOffTv{
    constructor(tv){
        this.tv = tv
    }

    execute(){
        this.tv.turnOff()
    }
  }



  const tv = new Tv();
  const turnOffTv = new TurnOffTv(tv);  
  const turnOnTv = new TurnOnTv(tv);
  
  const remote = new Remote();  
  remote.setCommand(turnOnTv);
  remote.pressKey(); 
  
  remote.setCommand(turnOffTv);
  remote.pressKey();