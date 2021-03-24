class Customer {

    constructor(id, name, stateCode, sales) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
        this.sales = sales;
    }

    addSales(sales) {
        this.sales += sales;
    }

    print() {
        return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales}`;
    }
}

let cust1 = new Customer(1, "MAX", "OH", 0.0);