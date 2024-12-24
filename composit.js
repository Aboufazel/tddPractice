class FileSystemComponent {
    display(index) {
      console.log('display methode');
      
    }
  }
  
  
  class File extends FileSystemComponent {
    constructor(name) {
      super();
      this.name = name;
    }
  
    display(index = 0) {      
      console.log(`${' '.repeat(index)}File: ${this.name}`);
    }
  }
  
  class Directory extends FileSystemComponent {
    constructor(name) {
      super();
      this.name = name;
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      this.children = this.children.filter(child => child !== component);
    }
  
    display(index = 0) {
      console.log(`${' '.repeat(index)}Directory: ${this.name}`);
      this.children.forEach(child => child.display(index + 2));
    }
  }
  
  
  const main = new Directory("Main");
  const abbas = new File("abbas.txt");
  const ali = new File("ali.txt");
  
  const subMain = new Directory("SubMain");
  const siavash = new File("siavash.txt");
  const nader = new File("nader.txt");
  
  main.add(abbas);
  main.add(ali);

  subMain.add(siavash);
  subMain.add(nader);

  main.add(subMain);
  
  
  main.display();
  