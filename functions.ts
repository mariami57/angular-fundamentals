
function add(a: number, b: number) {
    a + b; // VOID - does not return anything
}

// Named function
function addReturns(a: number, b: number) : number {
    return a + b;
}

// Arrow function
const subs = (num1:number, num2:number, num3 = 10) : number => num1 - num2 - num3;
console.log(subs(2,3));
console.log(subs(2,3, 5));

// Function expression
const multi = function(num1: number, num2:number,  num3?: number): number {
    return num3? num1 * num2 * num3 : num1 * num2;
}

function add2(num1:number, num2:number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
}

let numbers = [1,2,3,4,5]
console.log(add2(2,3, ...numbers));
console.log(add2(2,3, ...[1,2,3,4,5]));
console.log(add2(2,3,5,6,7,8));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatNumbers = getItems([1,2,3,4,5]);
let concatStrings = getItems(['a', 'b', 'c', 'd']);

console.log(concatNumbers);
console.log(concatStrings);