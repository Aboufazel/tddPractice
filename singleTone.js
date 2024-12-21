class Singleton {
    constructor() {
        this.data = "Hi , Abbas";
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    getData() {
        return this.data;
    }
    setData(newData) {
        this.data = newData;
    }
}
const instance1 = Singleton.getInstance();
console.log(instance1.getData());
const instance2 = Singleton.getInstance();
console.log(instance1.getData());
console.log(instance1.getData());
instance2.setData("Updated Abbas to Aboufazel");
console.log(instance1.getData());

