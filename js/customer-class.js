class Customer {

    constructor(id, name, stateCode, sales) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;
    }
    
    subSales(sales) {
        this.sales -= sales;
    }

    addSales(sales) {
        this.sales += sales;
    }


    print() {
        return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales}`;
    }
}

let cust1 = new Customer(1, "MAX", "OH", 0.0);
cust1.addSales(100.00);
cust1.addSales(300.00);
cust1.addSales(50.00);
console.log(cust1.print());

let cust2 = new Customer(2, "P&G", "OH", 100.00);
cust2.addSales(1000.00);
cust2.addSales(3200.00);
cust2.addSales(500.00);
console.log(cust2.print());

