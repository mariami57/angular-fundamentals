"use strict";
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
let john = new Employee(1, "John", "Highway 71");
john.empId = 100;
console.log(john.empId);
Employee.getEmployeeCount();
let a = john.getNameWithAdress();
let mike = new Manager(2, "Mike", "Another road");
let ma = mike.getNameWithAdress();
console.log(john);
console.log(ma);
