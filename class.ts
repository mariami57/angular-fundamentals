class Employee {
    #id: number;
    protected name: string;
    address: string;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id:number, name:string, address:string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAdress() : string {
        return `${this.name} lives at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAdress() : string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let john = new Employee(1, "John", "Highway 71");
john.empId = 100;

console.log(john.empId);


Employee.getEmployeeCount();
let a = john.getNameWithAdress();
let mike = new Manager(2, "Mike", "Another road");
let ma = mike.getNameWithAdress()

console.log(john)
console.log(ma);