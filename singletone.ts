class Singeltone {
    private static _instance: Singleton;
    private sinArray : string[]

    private constructor(){
       this.sinArray = ['salam' , 'be' , 'singeltone' , 'creational' ,'design' , 'patter']
    }

    public static getInstance(): Singleton {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance;
    }

    public getData(){
        return this.sinArray
    }

    public setData (data:string){
        this.sinArray.push(data)
    }

}
