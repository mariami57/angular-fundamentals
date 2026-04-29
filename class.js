"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    #id;
    name;
    address;
    get empId() {
        return this.#id;
    }
    set empId(id) {
        this.#id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "John", id: 1, email: "" };
    }
    getNameWithAdress() {
        return `${this.name} lives at ${this.address}`;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAdress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, "John", {
    street: "Highway",
    city: "London",
    state: "UK",
    pin: "4512"
});
john.empId = 100;
console.log(john.empId);
Employee.getEmployeeCount();
let a = john.getNameWithAdress();
let mike = new Manager(2, "Mike", {
    street: "Another road",
    city: "Bane",
    state: "UK",
    pin: "47512"
});
let ma = mike.getNameWithAdress();
console.log(john);
console.log(ma);
