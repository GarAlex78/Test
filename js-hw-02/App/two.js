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
//  function calculateArea(side1, side2, side3) {
//     // если нет значения для аргумента side1 или side2 - не выполняем расчетов, возвращаем undefined
//     if (side1 === undefined || side2 === undefined) {
//         return; // прекратить работу функции - возвращается результат undefined
//     }

//     // если не указана сторона 3, но есть сторона 1 и 2 - считаем площадь квадрата
//     if (side3 === undefined) {
//         return side1 * side2;
//     }
//     else {
//         // если указано три стороны - считаем площадь треугольника по формуле Герона
//         let p = (side1 + side2 + side3) / 2; // полупериметр треугольника
//         return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3)); // корень произведений разности полупериметра и каждой стороны
//     }
// }

// let result = calculateArea(10, 10);
// console.log("Площадь квадрата " + result);

// result = calculateArea(10, 10, 15);
// console.log("Площадь треугольника " + result);

// result = calculateArea(10);
// console.log("Площадь фигуры " + result);
// =========================task 5 ==================================
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
//-------------------------------------solution 5--------------------------------
//  const checkForSpam = function(message){
//    const stringToLoerCase = message.toLowerCase();
//     if (stringToLoerCase.includes('spam')||stringToLoerCase.includes('sale')){
//         return true;
//     }
//     return false;
//  }

//  console.log(checkForSpam('Veniam quis laborispa cIllum Anisalm veniam ad anim saleit sunt cillum.'))
// =========================task 6 ==================================

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
//-------------------------------------solution 5--------------------------------

// const sumAllNumbers = function () {
//   let input;
//   const numbers = [];
//   let total = 0;
//   do {
//     input = prompt("input number, please");

//     if (input === null) {
//       for (const iterator of numbers) {
//         total += iterator;
//       }
//       return total;
//     }
//     numbers.push(Number(input));
//   } while (input);
// };

// console.log(sumAllNumbers());
// =========================task 7 ==================================

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
//-------------------------------------solution 7--------------------------------
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const login = prompt('input your login, please');
// const isLoginValid = function(login){
// return login.length >= 4 && login.length <= 16
// };
// const isLoginUnique = function (login, logins) {
//     //const loginsToLoweerCase =[]
//     for (const iterator of logins) {
//        if (iterator.toLowerCase() === login.toLowerCase()) {
//         return false} ;
//     }
//     return true
  // } ;
// const addLogin = function (login,logins) {
//     if (isLoginValid(login)){
//         if (isLoginUnique(login,logins)){
//             logins.push(login);
//             console.log('The login added successfully')
//             console.log(`login: ${login}, logins: ${logins}`)
//         }else {
//             console.log('This login is already used')
//         }

//     }else (console.log('Error! Login must be between 4 and 16 characters'))
// } 
// console.log(isLoginValid(login))
// console.log(isLoginUnique(login,logins))
// addLogin(login,logins)
