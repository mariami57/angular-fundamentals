"use strict";
// STRING
let lname;
lname = 'John';
let newname = lname.toUpperCase();
console.log(newname);
// lname = 10;
// NUMBER
let age;
age = 20;
age = 20.5;
// age='20';
let dob = '10';
let result = age + parseInt(dob);
// BOOLEAN
let isValid = true;
console.log(isValid);
// ARRAY
let empList;
empList = ["Maria", "Maria1", "Maria2"];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[4];
let results = numList.filter((num) => num % 2 === 0);
let results2 = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 0 /* Color.Red */;
// TUPLE
let swapNumbers;
function swapNums(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNums(10, 20);
console.log(swapNumbers[2]);
