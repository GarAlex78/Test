"use strick";

// ===========================task 6========================================
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;
// ------------------------solution task6--------------------------------------------------

// let input;
// const numbers = [];
// let total = 0;
// let inputInNumber;

// do {
//   input = prompt("введите число");
//   inputInNumber = Number(input);
//   console.log(`input:  ${input}; inputInNumber: ${isNaN(inputInNumber)}`);
//   if (input === null && numbers.length>1) {
//     console.log('qwe')
//     for (const number of numbers) {
//     total += Number(number)
//     }
//   } else if (isNaN(inputInNumber)) {
//     console.log(isNaN(inputInNumber))
//     alert("input next number");

//   } else {
//     numbers.push(inputInNumber)
//   }
// } while (input !== null);

// console.log(numbers);
// console.log(`sum: ${total}`)

// ===========================task 8========================================
// const message =
//   "Aliquip ipsum eu cillum elit sunt laborum reprehenderit irure pariatur enim ipsum.";
// const messages = message.split(" ");
// console.log(messages);
// let longesWorld = messages[0];
// console.log(`do  ${longesWorld}`);
// for (let i = 1; i < messages.length; i += 1) {
//   if (longesWorld.length < messages[i].length) {
//     longesWorld = messages[i];
//   }
// }
// console.log(`posle ${longesWorld}`);
//========================task 1===========================================
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// const logItems = function(array) {
//   // твой код
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// ------------------------solution task 1--------------------------------------------------

// const logItems = function(array){
//     for (let i = 0; i <array.length; i+=1){
//         console.log(`${i+1} - ${array[i]}`)
//     }

// }
// const res = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])

//================================task 2==========================================

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

//_______________________________solution task 2_______________________________________

//  const calculateEngravingPrice = function (message, pricePerWord = 2){
//     const messageToArray = message.split(' ');
//     return messageToArray.length * pricePerWord
 //  }
//  const a = calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 5)
//  console.log(a)

//================================task 4==========================================
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

//_______________________________solution task 4_______________________________________

 // пример функции, которая использует несколько return
 function calculateArea(side1, side2, side3) {
    // если нет значения для аргумента side1 или side2 - не выполняем расчетов, возвращаем undefined
    if (side1 === undefined || side2 === undefined) {
        return; // прекратить работу функции - возвращается результат undefined
    }

    // если не указана сторона 3, но есть сторона 1 и 2 - считаем площадь квадрата
    if (side3 === undefined) {
        return side1 * side2;
    }
    else {
        // если указано три стороны - считаем площадь треугольника по формуле Герона
        let p = (side1 + side2 + side3) / 2; // полупериметр треугольника 
        return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3)); // корень произведений разности полупериметра и каждой стороны
    }
}

let result = calculateArea(10, 10);
console.log("Площадь квадрата " + result);

result = calculateArea(10, 10, 15);
console.log("Площадь треугольника " + result);

result = calculateArea(10);
console.log("Площадь фигуры " + result);