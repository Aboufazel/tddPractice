abstract class PaymentProcessor {
    // عملیات کلی که من برای پرداخت مد نظر دارم 
    public processPayment(): void {
      this.authenticateUser();
      this.processTransaction();
      this.sendReceipt();
    }
  
    // مراحلی که هر نوع پرداختی رو من بخوام انجام بدم مشترک هستن 
    protected authenticateUser(): void {
      console.log("Authenticating user...");
    }
  
    protected sendReceipt(): void {
      console.log("Sending payment receipt...");
    }
  
    // مرحله‌ایی که بر اساس نوع پرداخت میتونه فرق داشته باشه
    protected abstract processTransaction(): void;
  }
  
  
  class UsdtProcessor extends PaymentProcessor {
    protected processTransaction(): void {
      console.log("Processing payment via Usdt...");
    }
  }
  
  
  class CreditCardProcessor extends PaymentProcessor {
    protected processTransaction(): void {
      console.log("Processing payment via Credit Card...");
    }
  }
  
  
  const usdtPayment = new UsdtProcessor();
  console.log("=== Usdt Payment ===");
  usdtPayment.processPayment();
  
  const creditCardPayment = new CreditCardProcessor();
  console.log("\n=== Credit Card Payment ===");
  creditCardPayment.processPayment();
  