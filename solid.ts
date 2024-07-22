/* 
    S => single of responsibility principle
    O => open of closed responsibility principle
    L => liskov substitution responsibility principle
    I => interface segregation responsibility principle
    D => dependency inversion responsibility  principle  
*/

interface ProductProps {
  name: string;
  price: number;
}

class Product {
  private props: ProductProps;

  constructor(name: string, price: number) {
    this.props = { name, price };
  }

  get name() {
    return this.name;
  }
  get price() {
    return this.price;
  }
}

interface PaymentMethod {
  getDiscount(amount: number): number;
}

class PaymentByBillet implements PaymentMethod {
  getDiscount(amount: number) {
    return amount * 0.1;
  }
}

interface PaymentCredit {
  number: number;
  expires: number;
  installments: number;
}

class PaymentByCredit implements PaymentMethod, PaymentCredit {
  number: number;
  expires: number;
  installments: number;

  constructor(number: number, expires: number, installments: number) {
    this.number = number;
    this.expires = expires;
    this.installments = installments;
  }

  getDiscount(amount: number) {
    if (this.installments == 12) {
      return amount * 0.01;
    }

    if (this.installments == 9) {
      return amount * 0.02;
    }

    if (this.installments == 6) {
      return amount * 0.03;
    }

    return 0;
  }
}

class PaymentByDebit implements PaymentMethod {
  getDiscount(amount: number) {
    return amount * 0.05;
  }
}

class PaymentByPix implements PaymentMethod {
  getDiscount(amount: number): number {
    return amount * 0.15;
  }
}

class GetOrderDiscount {
  private paymentMethod: PaymentMethod;
  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  execute(amount: number) {
    return this.paymentMethod.getDiscount(amount);
  }
}

const order = new Product("phone", 1000);

const getOrderDiscount = new GetOrderDiscount(
  new PaymentByCredit(12113, 1, 12)
);

getOrderDiscount.execute(order.price);
