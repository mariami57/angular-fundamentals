import { Login, User } from './interfaces';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    #id: number;
    protected name: string;

    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id:number, name:string, address:Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
        return {name:"John", id:1, email:""};
    }

    getNameWithAdress() : string {
        return `${this.name} lives at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAdress() : string {
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

let ma = mike.getNameWithAdress()

console.log(john)
console.log(ma);