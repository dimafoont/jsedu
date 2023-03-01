"use strict"; // strict mode

// a = 15;
// console.log(a); not working with use strict mode

let number = 123;
let Number = 1234;
const leftBorderWidth = 12345;
console.log(leftBorderWidth, number, Number);

const obj = {
    a:50,
    b:50,
}

obj.a = 20;
console.log(obj.a)


/* HOISTING  */
console.log(name) // return undefined (hoisting всплыьие переменных)
var name = 'Ivan'; //not preferable

name = 'Alex';

{
    let result = 50;
    console.log(result) // area of visibility (working)
}

// console.log(result) // area of visibility variables (error)


// RULES FOR NAMING OF VARIABLES V2//

// camelCase
// snake_case
// UPPER_SNAKE_CASE (for const) or _otherConst
// PascalCase (for classess)

