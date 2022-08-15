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