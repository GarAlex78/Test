"use strick";

// const number = 20.5;

// const name = "sasha";

// const isActive = true;

// const type = typeof name

// console.log(number);

// console.log(name);

// console.log(isActive);

// console.log(window);

//alert ('ops');

// const input = prompt('input your name');
// console.log(input);
//console.log(typeof input);

// const isname = confirm('input your soname');
// console.log(typeof isname);
// console.log(isname);
// const a = 50;
// const b = 10;
// const result = 5;
// const isNumberInRange = result > b && result < a;
// console.log(isNumberInRange);
// const result = 5 % 2;
// console.log(result);
//========task1=========================
//  const name = "Генератор защ поля";
//  let price = 1000;
//  console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
//  price = 2000;
//  console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
//========task2=========================

// const total = Number(prompt("введитк кол това на складк:"));
// console.log(typeof total);
// const ordered = 101;
// const notEnoughGoods = "На складе недостаточно твоаров!";
// const orderIsProcessed = "Заказ оформлен, с вами свяжется менеджер";
// if (ordered > total) {
//   isResult = notEnoughGoods;
// } else {
//   isResult = orderIsProcessed;
// }
// console.log(isResult);
//========task3=========================
// const ADMIN_PASSWORD = "jquery";
// let message = "Доступ запрещен, неверный пароль!";
// const cancellByUser = "Отменено пользователем!";
// const accessIsAllowed = "Добро пожаловать!";
// const inputPassword = prompt("введите пароль админа");
//------------- one variant --------
// message =
//   inputPassword === null
//     ? cancellByUser
//     : inputPassword === ADMIN_PASSWORD
//     ? accessIsAllowed
//     : message;
//------------- two variant -------
// if (inputPassword === null) {
//   message = cancellByUser;
// } else if (ADMIN_PASSWORD === inputPassword) {
//   message = accessIsAllowed;
// }
// alert(message);
//========task4=========================
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
//-----------------------solution task4-----------------------------------------
// const credits = 23580;
// const costOfDroid = 3000;
//const countBuyDroid = Number(prompt("Сколько дроидов хотите купить?"));
// const sumBoughtDroid = countBuyDroid * costOfDroid;
// const canBuy = credits >= sumBoughtDroid;
// let message;
// message = canBuy
//   ? `Вы купили ${countBuyDroid} дроида, на счету осталось ${
//       credits - sumBoughtDroid
//     } кредитов.`
//   : "Недостаточно средств на счету!";
// if (countBuyDroid === 0) {
//   message = "Отменено пользователем!";
// }
// console.log(message);
//==========================task5===================================
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
//-----------------------solution task5-----------------------------------------
// const CHINA = 'китай';
// const CHILE= "чили";
// const AUSTRALIA = "австралия";
// const INDIA = "индия";
// const JAMAICA = "ямайка";
// const PRINT_COUNTRY = 'введите страну доставки.';
// const NOT_DELIVERY = 'В вашей стране доставка не доступна';
// const CANCEL_BY_USER = "Отменено пользователем!";
// const userChoice = prompt(PRINT_COUNTRY);
// if (userChoice === null) {
//     message = CANCEL_BY_USER;
//   }else {
//       const userChoiceLowerCase = userChoice.toLowerCase();
//    let price;
// switch (userChoiceLowerCase){
//     case CHINA:
//         price = 100;
//     break;
//     case CHILE:
//         price = 250;
//     break;
//     case AUSTRALIA:
//         price = 170;
//     break;
//     case INDIA:
//         price = 80;
//     break;
//     case JAMAICA:
//         price = 120;
//     break;
//     default:
//         message = NOT_DELIVERY;

//    }
//     if (price){
//         message =  `Доставка в ${userChoiceLowerCase} будет стоить ${price} кредитов`;

//     }}
// console.log(message);

//==========================task 6===================================
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

//-----------------------solution task 6-----------------------------------------
// let input;
// let total = 0;
// let inputNumber;
// while (input !== null) {
//   input = prompt("enter any number");
//   inputNumber = Number(input);
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//   } else if (inputNumber) {
//     total += inputNumber;
//   } else {
//     alert("Было введено не число, попробуйте еще раз");
//   }
// }
