class news {
    private subscribers : string[]
    private constructor (){
        this.subscribers
    }

    public newSubscribe (user:string){
         this.subscribers.push(user)
    }

    public unSubscribe (user:string){
       this.subscribers = this.subscribers.filter(info=> info !== user)
    }

    public publishNews(news:string) {
        console.log(`News publishNewsed: ${news}`);
    }
    
}


class user {
    private name : string

    private constructor(){
        this.name
    }
  
    public receive(news:string , name:string) {
      console.log(`${this.name} received news: ${news}`);
    }
  }
  