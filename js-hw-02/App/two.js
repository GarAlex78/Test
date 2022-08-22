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

//-----------------function-----------------------------------
// const add = function (a,b) {
//     console.log(`a: ${a}, b: ${b}`)
//     const summ = a + b;
//     console.log(`summ: ${summ}`)
// };

// add(2,3);


//console.log(4<=4); // 8
// console.log(message.indexOf("hello")); // -1

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//   const messageLigth = message.length;
//   console.log(messageLigth)
//     if (messageLigth<=maxLength){
//         console.log('if')
//       result = message;
//     }else {
//         console.log('else')
//       result = message.slice(0,maxLength) + "...";
//     }
//     /// Change code above this line
//     return result;
//   }
// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//   const messageToLowerCase = message.toLowerCase();
//     result = messageToLowerCase.includes('spam') || messageToLowerCase.includes('sale');// Change code above this line
//     return result;
//   }
//  console.log(checkForSpam("Excepteur adipisicing non consectetur incididunt aliqua et  labosalris mollit incididunt mollit Lorem deserunt pariatur incididunt.")) ;

// function checkStorage(available, ordered) {
//     // Change code below this line
   
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } else if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//       return "The order is accepted, our manager will contact you";
    
  
  
//     // Change code above this line
//   }
  
// console.log( checkStorage(100, 101))
// const g = 56;
// function foor () {
//     const l = 2;
//     for(let i=1 ; i<10; i+=1){
//         const d = 30;
//         if (i ===5){
//             const f = 22;
//             console.log('l: ',l);
//             console.log('d: ',d);
//             console.log('f: ',f);
//             console.log('g: ',g);
//         }
//     }
// } 
// foor();
//const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];
// console.log(lastElement)
//console.log(fruits[fruits.length - 1])

//function getExtremeElements(array) {
    // Change code below this line
//   const firstElementAr = array[0];
//   const lastElementAr  = array[array.length - 1];
//   const newAr = array.slice(0,array.length);
//     return newAr;
    // Change code above this line
 // }
//   getExtremeElements([1,2,3,3,4,5]);
  //console.log(getExtremeElements([1,2,3,3,4,5,6]))

  //function getExtremeElements(array) {
    // Change code below this line
//   const firstElementAr = array[0];
//   const lastElementAr  = array[array.length - 1];
//   const newAr = [firstElementAr,lastElementAr];
//     return newAr;
    // Change code above this line
  //}
//   function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  const words = message.split(' ');
//  console.log(words)
//  const countWordOfWords = words.length;
//  console.log(countWordOfWords)
//     return countWordOfWords*pricePerWord;
 
 
//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
// function slugify(title) {
//     // Change code below this line
//   const titleInArrLowerCase = title.toLowerCase().split(' ');
//   console.log(titleInArrLowerCase)
//   const slag = titleInArrLowerCase.join('-');
//   return slag;
//     // Change code above this line
//   }
// console.log(slugify("Arrays for begginers"))

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1) ;
// const lastThreeEls = fruits.slice(-3);

// console.log("firstTwoEls: ", firstTwoEls);
// console.log("nonExtremeEls: ", nonExtremeEls)
// console.log("lastThreeEls: ", lastThreeEls)

//-------------------------------------------------------------
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.


// function makeArray(firstArray, secondArray, maxLength) {
//     const jointArray = firstArray.concat(secondArray);
//     const jointArrayLength = jointArray.length;
   
// if (jointArrayLength > maxLength){
   
//     return jointArray.slice(0,maxLength)
// }
//     return jointArray
// }

// console.log(makeArray(["Earth", "Jupiter",], ["Neptune", "Uranus", "Venus"], 0 ))

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i<fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];
//   }
//     // Change code above this line
//     return total;
//   }
//  console.log( calculateTotalPrice([164, 48, 291]))

// function findLongestWord(string = "lazzy dog") {

//   const stringArray = string.split(" ");
//     let longestWord = stringArray[0];
//     for (const item of stringArray){
//       if (longestWord.length < item.length){
//         longestWord =  item ;
//       }
//        }
//       return longestWord;
//    }
//    findLongestWord()

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i<=max; i+=1){
//     if (Number.isInteger(i)){
//       numbers.push(i)
//     }
//   }
//     // Change code above this line
//     return numbers;
//   }
//   console.log(createArrayOfNumbers(14,17))

//   function createArrayOfNumbers(numbers, value) {
//     const newNumbers = [];

//   for (let item of numbers){
//     if (item>value){
//         newNumbers.push(item)
//     }
//   }
//        return newNumbers;
//   }
//   console.log(createArrayOfNumbers([12, 24, 8, 41, 76], 38))


// function getCommonElements(array1, array2) {
//     // Change code below this line
//   const newArray =[];
//     for (let itemArray1 of array1){
//       if(array2.includes(itemArray1)){
//         newArray.push(itemArray1);
//       }
//     }
//   return newArray;
  
//    // Change code above this line
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))


// function getEvenNumbers(start, end) {
//     // Change code below this line
//  const evenNumbers = [];
//    for (let i = start; i<=end; i+=1){
     
//      if (i % 2 === 0){
//        evenNumbers.push(i)
//      }
//    }
 
//  return evenNumbers;
//      // Change code above this line
//    }
//    console.log(getEvenNumbers())


// function includes(array, value) {
//     // Change code below this line
//   let isInclud = false;
//     for (let item of array){
//     //   if (item === value){ 
//     //     return }
//     console.log(item)
//       if (item === value){
//         isInclud = true;} 
//     }
//     return isInclud
//     // Change code above this line
//   }
  
//   console.log(includes([1, 2, 3, 4, 5], 3))


function calculateTotal(number) {
    // Change code below this line
   let total =0;
     for (let i = 1; i <= number; i +=1) {
       total += i;
     }
   return total;
   
     // Change code above this line
   }
   console.log(calculateTotal(7))