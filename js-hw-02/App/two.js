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

let input;
const numbers = [];
let total = 0;
let inputInNumber;

do {
  input = prompt("введите число");
  inputInNumber = Number(input);
  console.log(`input:  ${input}; inputInNumber: ${isNaN(inputInNumber)}`);
  if (input === null && numbers.length>1) {
    console.log('qwe')
    for (const number of numbers) {
    total += Number(number)
    }
  } else if (isNaN(inputInNumber)) {
    console.log(isNaN(inputInNumber))
    alert("input next number");
    
  } else {
    numbers.push(inputInNumber)
  }
} while (input !== null);

console.log(numbers);
console.log(`sum: ${total}`)
