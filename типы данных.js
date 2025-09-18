/*Задание 1*/
let age = 30;
console.log(age); // Вывод: 30

age = 31; // Изменение значения допустимо
console.log(age); // Вывод: 31

// let age = 32; // Ошибка: переменная уже объявлена в этой области видимости/ можем изменить но не объявить ни с изменением ни повторно.


const birthYear = 1990;
console.log(birthYear); // Вывод: 1990

// birthYear = 1991; // Ошибка: присваивание значения константе
// const birthYear = 1992; // Ошибка: переменная уже объявлена в этой области видимости
// const birthYear; // Ошибка: константа постоянная величина и должна быть инициализирована при объявлении

/*Задание 2*/

/*Задание3*/

// 1. Создание переменных
let num = 42;               // number
let str = "Привет, мир!";   // string
let bool = true;            // boolean
let empty = null;           // null
let undef;                  // undefined
let notANumber = NaN;       // NaN

// 2. Вывод значений и типов
console.log("num:", num, "| typeof:", typeof num);
console.log("str:", str, "| typeof:", typeof str);
console.log("bool:", bool, "| typeof:", typeof bool);
console.log("empty:", empty, "| typeof:", typeof empty);
console.log("undef:", undef, "| typeof:", typeof undef);
console.log("notANumber:", notANumber, "| typeof:", typeof notANumber);

/*Задание №4 */

let str1 = "123";
let num1 = 456;

// Строка → число
let strToNum = Number(str1); // или parseInt(str), parseFloat(str)
console.log(strToNum);      // 123
console.log(typeof strToNum); // "number"

// Число → строка
let numToStr = String(num1); // или num.toString()
console.log(numToStr);      // "456"
console.log(typeof numToStr); // "string"

/*Задание №5*/
/*Тип переменной определяется во время выполнения, а не при объявлении*/
let value = 100;           // Тип: number
console.log(value);        // 100
console.log(typeof value); // "number"

value = "Сто";             // Тип: string
console.log(value);        // "Сто"
console.log(typeof value); // "string"

/*Задание№6*/

// 1. Запрос имени и возраста
let name1 = prompt("Введите ваше имя:");
let age1 = prompt("Введите ваш возраст:");

// 2. Вывод данных в консоль
console.log("Имя пользователя:", name1);
console.log("Возраст пользователя:", age1);
