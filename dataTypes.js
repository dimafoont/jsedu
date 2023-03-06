/* SINGLE TYTPES:
* Numbers 1,2,3
* Strings 'string'
* boolean true, false
* null - not exist
* undefined = exist but undefined
* Symbol
* BigInt
*
*
* OBJECTS:
*
* Arrays []
* Functions
* Date objects
* Regular expressions
* Errors
*  */

let number = 4; // 4.6,

console.log(4 / 0); // infinity
console.log('st' * 9); // NaN

let str = 'string'; // String

const bool = true; // boolean

// console.log(something); // null

let und;
console.log(und) // undefined

const obj = {
    name: "Dima",
    age: 33,
    isMarried: false,
};

console.log(obj.name); // preferable
console.log(obj["age"]);

let arr = ['plumb.png', 6, 'orange.jpg', 'apple.bmp']; // array
console.log(arr[0]);


