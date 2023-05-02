class Sale {
    constructor(price) {
        this.price = price;
    }

    calculatePrice() {
        return this.price;
    }
}

class DeliveryDecorator {
    constructor(sale) {
        this.sale = sale;
    }

    calculatePrice() {
        return this.sale.calculatePrice();
    }
}

class ExpressDeliveryDecorator extends DeliveryDecorator {
    calculatePrice() {
        return this.sale.calculatePrice() + 10;
    }
}

class InsuredDeliveryDecorator extends DeliveryDecorator {
    calculatePrice() {
        return this.sale.calculatePrice() + 5;
    }
}

const sale = new Sale(100);
const expressDeliverySale = new ExpressDeliveryDecorator(sale);
const insuredDeliverySale = new InsuredDeliveryDecorator(sale);

console.log(expressDeliverySale.calculatePrice()); // 110
console.log(insuredDeliverySale.calculatePrice()); // 105
