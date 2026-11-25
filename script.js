"use strict";

// --- Завдання 1. Підключення JavaScript ---
console.log("JavaScript успішно підключено!");


// --- Завдання 2. Створення змінних різних типів ---
const myName = "Андрій";
let age = 16;
let avgScore = 10.5;
let isStudent = true;

let emptyVar;
let nullVar = null;
const bigNumber = 9007199254740991n;
const uniqueId = Symbol("id");

console.log("myName:", myName, typeof myName);
console.log("age:", age, typeof age);
console.log("avgScore:", avgScore, typeof avgScore);
console.log("isStudent:", isStudent, typeof isStudent);
console.log("emptyVar:", emptyVar, typeof emptyVar);
console.log("nullVar:", nullVar, typeof nullVar);
console.log("bigNumber:", bigNumber, typeof bigNumber);
console.log("uniqueId:", uniqueId, typeof uniqueId);


// --- Завдання 3. Перетворення типів даних ---
let val1 = "125";
let res1 = Number(val1);
console.log(val1, typeof val1, "->", res1, typeof res1);

let val2 = "15.75";
let res2 = Number(val2);
console.log(val2, typeof val2, "->", res2, typeof res2);

let val3 = 250;
let res3 = String(val3);
console.log(val3, typeof val3, "->", res3, typeof res3);

let val4 = true;
let res4 = String(val4);
console.log(val4, typeof val4, "->", res4, typeof res4);

let val5 = "false";
let res5 = Boolean(val5);
console.log(val5, typeof val5, "->", res5, typeof res5);

let val6 = 0;
let res6 = Boolean(val6);
console.log(val6, typeof val6, "->", res6, typeof res6);

let val7 = 1;
let res7 = Boolean(val7);
console.log(val7, typeof val7, "->", res7, typeof res7);

let val8 = null;
let res8 = Number(val8);
console.log(val8, typeof val8, "->", res8, typeof res8);

let val9 = "45px";
let res9 = parseInt(val9);
console.log(val9, typeof val9, "->", res9, typeof res9);

let val10 = "12.5kg";
let res10 = parseFloat(val10);
console.log(val10, typeof val10, "->", res10, typeof res10);


// --- Завдання 4. Арифметичні операції ---
let strA = "25";
let strB = "5";

let numA = Number(strA);
let numB = Number(strB);

console.log("Сума:", numA + numB);
console.log("Різниця:", numA - numB);
console.log("Добуток:", numA * numB);

// Додавання без перетворення типів
console.log("Без перетворення:", strA + strB);
// Пояснення: коли обидва значення є рядками (string), оператор + працює як склеювання рядків (конкатенація), тому виходить рядок "255", а не число 30.


// --- Завдання 5. Дослідження перетворення типів ---

// Очікувано: NaN (рядок "hello" неможливо перетворити в число)
console.log('Number("hello"):', Number("hello"));

// Очікувано: 0 (порожній рядок при перетворенні в число дає 0)
console.log('Number(""):', Number(""));

// Очікувано: true (рядок не порожній, у ньому є символ "0", тому true)
console.log('Boolean("0"):', Boolean("0"));

// Очікувано: false (порожній рядок завжди дає false)
console.log('Boolean(""):', Boolean(""));

// Очікувано: "null" (значення null просто стає текстом)
console.log('String(null):', String(null));

// Очікувано: "105" (через рядок "10" плюс склеює його з числом 5 у рядок)
console.log('"10" + 5:', "10" + 5);

// Очікувано: 5 (мінус працює тільки з числами, тому "10" перетворюється на число 10)
console.log('"10" - 5:', "10" - 5);

// Очікувано: "object" (відома давня помилка в самому JavaScript, хоча null це окремий примітив)
console.log('typeof null:', typeof null);
