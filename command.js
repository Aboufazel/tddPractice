  class Tv {
    turnOn() {
        console.log("tv is turn on");
      }
    
    turnOff() {
        console.log("tv is turn off");
      }

    changeChanel(){
        console.log('chanel is changed')
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


  class ChangeTvChanel{
    constructor(tv){
        this.tv = tv
    }

    execute(){
        this.tv.changeChanel()
    }
  }

  const tv = new Tv();
  const turnOffTv = new TurnOffTv(tv);  
  const turnOnTv = new TurnOnTv(tv);
  const changeChanel = new ChangeTvChanel(tv);
  
  const remote = new Remote();  

  remote.setCommand(turnOnTv);
  remote.pressKey(); 
  
  remote.setCommand(turnOffTv);
  remote.pressKey();

  remote.setCommand(changeChanel);
  remote.pressKey();