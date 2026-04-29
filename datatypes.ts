// STRING

let lname: string;

lname = 'John';

let newname = lname.toUpperCase();

console.log(newname);

// lname = 10;

// NUMBER
let age: number;
age = 20;
age = 20.5;
// age='20';
let dob = '10'

let result = age + parseInt(dob);

// BOOLEAN
let isValid: boolean=true;

console.log(isValid);

// ARRAY
let empList: string[];
empList = ["Maria", "Maria1", "Maria2"]

let numList: Array<number>;

numList = [1,2,3,4,5];

let newNum = numList[4];

let results = numList.filter((num) => num % 2 === 0);
let results2 = numList.find((num) => num === 2);

let sum = numList.reduce((acc, num) => acc + num)

console.log(sum)

// ENUM
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color =  Color.Red;

// TUPLE
let swapNumbers: [number, number];
function swapNums(num1:number, num2:number) : [number, number] {
    return [num2, num1]
}

swapNumbers = swapNums(10,20);

// console.log(swapNumbers[2]);

// ANY
let department: any;
department = "IT";
department = 10;

