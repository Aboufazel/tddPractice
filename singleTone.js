class Singleton {
    constructor() {
        this.data = "Hi , Abbas";
        this.name = "nekbat"
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    getData() {
        return [this.data , this.name];
    }
    setData(newData , name) {
        this.data = newData;
        this.name = name
    }
}

const abbas = Singleton.getInstance();
const nader = Singleton.getInstance();
console.log(abbas.getData());
console.log(nader.getData());

nader.setData("Updated Abbas to Aboufazel" , 'salam');
console.log(abbas.getData());
console.log(nader.getData());
