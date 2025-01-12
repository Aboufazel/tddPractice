class Modem {
    public deviceDns : device[]
    public constructor (){
        this.deviceDns = []
    }

    public newConection (device:any){
         this.deviceDns.push(device)
    }

    public kickConection (device:any){
       this.deviceDns = this.deviceDns.filter(info=> info !== device)
    }

    public conectionStatus(staus:string) {
        console.log(staus)
        this.notifyConection(staus)
    }
    
    private notifyConection(status: string) {
        this.deviceDns.forEach((devices) => {
            devices.conected(status , devices.name);
        });
    }
}


class device {
    public name : string
    public dns : string


    public constructor(name , dns){
        this.name = name
        this.dns = dns
    }
  
    public conected(dns:string , name:string) {
      console.log(`${this.name} conect to modem with dns: ${this.dns}`);
    }
  }


  const modem= new Modem()
  const iphone15 = new device('iphone15' , '12.12.12.1.2')
  const iphone16 = new device('iphone16' , '244.244.122.2')
  
  modem.newConection(iphone15)
  modem.newConection(iphone16)

  modem.conectionStatus('the modem is online')

  modem.kickConection(iphone16)

  modem.conectionStatus('one conection kick from modem')