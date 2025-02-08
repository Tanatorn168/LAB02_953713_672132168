//console.log("Hello, Typescript with Node.js");

//task2
//let x: number | string = 10;
//x = 10;
//if (typeof x === 'string') {
//    console.log('x is string');
//}
//else if (typeof x === 'number') {
//    console.log('x is number');
//}
//else {
//    console.log('x is neither string nor number');
//}

//task3
const add = (a:number, b:number):string => {
    const result =a+b;
    return result.toString ();
}
const result = add(1,2) + 0;
console.log(result, 'type of result: ', typeof result);