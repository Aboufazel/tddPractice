class PaymentGateway {
    pay(amount) {
      throw new Error("This method should be overridden!");
    }
  }
  

  class PaymentContext {
    constructor(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    setPaymentStrategy(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    makePayment(amount) {
      this.paymentStrategy.pay(amount);
    }
  }

 
class CreditCardPayment extends PaymentGateway {
    constructor(cardNumber) {
      super()
      this.cardNumber = cardNumber;
    }
  
    pay(amount) {
      console.log(`پرداخت ${amount} تومان با کارت اعتباری ${this.cardNumber}`);
    }
  }
  

  class PayPalPayment extends PaymentGateway {
    constructor(email) {
      super()
      this.email = email;
    }
  
    pay(amount) {
      console.log(`پرداخت ${amount} دلار با پی پال از طریق ایمیل ${this.email}`);
    }
  }
  

  class PerfectMoneyPayment extends PaymentGateway {
    constructor(accountId) {
      super()
      this.accountId = accountId;
    }
  
    pay(amount) {
      console.log(`پرداخت ${amount} دلار با پرفکت مانی از طریق حساب ${this.accountId}`);
    }
  }
  

  class CashPayment extends PaymentGateway {
    pay(amount) {
      console.log(`پرداخت ${amount} تومن به صورت نقدی`);
    }
  }
  
  class CryptoPayment extends PaymentGateway {
    constructor(walletAddress) {
        super()
      this.walletAddress = walletAddress;
    }
  
    pay(amount) {
      console.log(`پرداخت ${amount} تتر با ارز دیجیتال به آدرس کیف پول ${this.walletAddress}`);
    }
  }
  




const creditCardPayment = new CreditCardPayment("6219-8619-0247-4179");
const payPalPayment = new PayPalPayment("user@example.com");
const perfectMoneyPayment = new PerfectMoneyPayment("PM123456");
const cashPayment = new CashPayment();
const cryptoPayment = new CryptoPayment("1A2B3C4D5E6F7G8H9I0J");

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.makePayment(100);

paymentContext.setPaymentStrategy(payPalPayment);
paymentContext.makePayment(200);

paymentContext.setPaymentStrategy(cashPayment);
paymentContext.makePayment(50);


paymentContext.setPaymentStrategy(cryptoPayment);
paymentContext.makePayment(300);

  