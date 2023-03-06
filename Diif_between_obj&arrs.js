const arr = ['a', 'b', 'c'];

arr[10] = '3456';
console.log(arr[10], arr)
const arrObj = {
    0:'a',
    1:'b',
    2:'c',
    abc: {
        df: [{}, {}],
        name: 'Dima',
    }
};
console.log(arrObj.abc.name)
const obj = {
    a:1,
    b:2,
};

const e = 'e';

arrObj.b = '1234';
arrObj[e]= '12345';

console.log(arr[1]);
console.log(obj.b);
console.log(arrObj[1]);
console.log(arrObj['b']);
console.log(typeof(arrObj.b));
console.log(arrObj.e);

const obj2 = {
    Anna: 500,
    'Alice': 800,
};

console.log(obj2.Anna, obj2.Alice);


