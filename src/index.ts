//console.log("Hello, Typescript with Node.js");
let x: number | string = 10;
x = 'hello';
if (typeof x === 'string') {
    console.log('x is string');
}
else if (typeof x === 'string') {
    console.log('x is number');
}
else {
    console.log('x is neither string nor number');
}