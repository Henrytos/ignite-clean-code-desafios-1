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
class PaymentByCredit implements PaymentMethod {
  getDiscount(amount: number) {
    return 0;
  }
}
class PaymentByDebit implements PaymentMethod {
  getDiscount(amount: number) {
    return amount * 0.05;
  }
}

class GetOrderDiscount {
  execute(amount: number, methodPayment: PaymentMethod) {
    return methodPayment.getDiscount(amount);
  }
}

const order = new Product("phone", 1000);

const getOrderDiscount = new GetOrderDiscount();

getOrderDiscount.execute(order.price, new PaymentByBillet());
