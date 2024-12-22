class Invoice {
    constructor(amount) {
      this.amount = amount;  
    }
  
    getAmount() {
      return this.amount;
    }
  }
  

  
class InvoiceDec {
    constructor(invoice) {
      this.invoice = invoice; 
    }
  
    getAmount() {
      return this.invoice.getAmount(); 
    }
  }
  

  class Discount extends InvoiceDec {
    constructor(invoice, discount) {
      super(invoice);
      this.discount = discount;  
    }
  
    getAmount() {
      return this.invoice.getAmount() - (this.invoice.getAmount() * (this.discount / 100));
    }
  }
  

  class Tax extends InvoiceDec {
    constructor(invoice, taxRate) {
      super(invoice);
      this.taxRate = taxRate; 
    }
  
    getAmount() {
      return this.invoice.getAmount() + (this.invoice.getAmount() * (this.taxRate / 100));
    }
  }
  

  class Shipping extends InvoiceDec {
    constructor(invoice, shippingCost) {
      super(invoice);
      this.shippingCost = shippingCost; 
    }
  
    getAmount() {
      return this.invoice.getAmount() + this.shippingCost;
    }
  }



let myInvoice = new Invoice(1000);  

myInvoice = new Discount(myInvoice, 10);  


myInvoice = new Tax(myInvoice, 18);  


myInvoice = new Shipping(myInvoice, 50);  


console.log(myInvoice.getAmount()); 

  