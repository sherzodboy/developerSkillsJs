"use strict";

// 1ta funksiya yarating u doim doim teskari qiymat qaytaradigan

// 1ta funksiya yarating
// !

// const reverseFn = function (text) {
//   return !text;
// };

// console.log(reverseFn(""));
// console.log(reverseFn([]));
// console.log(reverseFn(undefined));
// console.log(reverseFn(1));
// console.log(reverseFn("1"));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(Math.min(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// const array = [3, 6, 2, 56, 32, 5, 89, 32];
// let largest = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > largest) {
//     largest = array[i];
//   }
// }

// // console.log(largest);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// console.log(array1.concat(array2));

// console.log(num);
// let num = 10;

// const getTemprature = () => {
//   const tempAlibek = {
//     unit: "Celcies",
//     temp: "Tempratura",
//     // fix
//     value: Number(prompt("What is yor tem?")),
//   };

// find
//   console.table(tempAlibek);

//   console.log(tempAlibek.value);
//   console.warn(tempAlibek.value);
//   console.error(tempAlibek.value);

// error
//   const alibek = tempAlibek.value + 180;
//   return alibek;
// };

// console.log(getTemprature());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 45

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  // sum = 0 + 1
  // sum = 1 + 2
  // sum = 3 + 3
  // sum = 6 + 4
  // sum = 10 + 5
  // sum = 15 + 6
  // sum = 21 + 7
  // sum = 28 + 8
  // sum = 36 + 9
  // sum = 45
}
console.log(sum);
