export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

// renaming name so that you access it as username and email as userLogin
let { name : username, email: userLogin }: User = {name:"John", id:1, email:""};

// user.name;
// user.email;

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name:"Maria", id: 1, email:"", salary: 1000};


export interface Login {
    login(): User;
}

let  [ user1, user2, ...restUsers ]: User[] = [
    {name:"Type", id: 2, email: ""},
    {name:"Type2", id: 3, email: ""},
    {name:"Type3", id: 4, email: ""},
    {name:"Type4", id: 5, email: ""},
    {name:"Type5", id: 6, email: ""},
];

console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);
console.log(result);