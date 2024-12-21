class NewsObserver {
    constructor() {
      this.subscribers = []; 
    }
  
    
    subscribe(user) {
      this.subscribers.push(user);
    }
  
    
    unsubscribe(user) {
      this.subscribers = this.subscribers.filter((subscriber) => subscriber !== user);
    }
  
    
    publishNews(news) {
      console.log(`News publishNewsed: ${news}`);
      this.notifySubscribers(news);
    }
  
    
    notifySubscribers(news) {
      this.subscribers.forEach((subscriber) => subscriber.receive(news));
    }
  }
  

  class User {
    constructor(name) {
      this.name = name;
    }
  
    receive(news) {
      console.log(`${this.name} received news: ${news}`);
    }
  }
  



  

  const newsSystem = new NewsObserver(); 
  
  const abbas = new User("Abbas");
  const ali = new User("Ali");
  const nader = new User("Nader");
  const siavash = new User("Siavash");
  
  newsSystem.subscribe(abbas);
  newsSystem.subscribe(ali);
  newsSystem.subscribe(nader);
  newsSystem.subscribe(siavash);
  
  newsSystem.publishNews("سیاوش خدا لعنتت کنه");

  newsSystem.unsubscribe(siavash);
  
  
  newsSystem.publishNews("چی بود عامو این از دستش راحت شدیم");
  