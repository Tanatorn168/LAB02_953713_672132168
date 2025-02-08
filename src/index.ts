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
//const add = (a:number, b:number):string => {
   // const result =a+b;
    //return result.toString ();
//}
//import { add } from './function';
//const result = add(1,2) + 0;
//console.log(result, 'type of result: ', typeof result);

import { add,subtract }  from './function';
const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result: ', typeof result);
console.log(result2, 'type of result2: ', typeof result2);


//task 3 - findMax
//const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
//const findMax = (numbers:number[]):string => {
  //  let max = numbers[0];
    //for (let i = 1; i < numbers.length; i++) {
      //  if (numbers[i] > max) {
        //    max = numbers[i];
        //}
    //}
    //return max.toString();
//}
//console.log(findMax(numbers), 'type of findMax: ', typeof findMax(numbers));
