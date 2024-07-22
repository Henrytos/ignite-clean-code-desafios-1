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

class GetOrderDiscount {
  execute(amount: number, methodPayment: string) {
    if (methodPayment == "billet") {
      return amount * 0.1;
    }

    if (methodPayment == "credit") {
      return amount * 0;
    }

    if (methodPayment == "debit") {
      return amount * 0.05;
    }

    return 0;
  }
}

const order = new Product("camisa", 1000);

const getOrderDiscount = new GetOrderDiscount();

getOrderDiscount.execute(order.price, "billet");
