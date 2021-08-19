//1
// let day = Number(prompt('Введите число:'));
// switch (day) {
//     case 1:
//         console.log('Понедельник');
//         break;
//     case 2:
//         console.log('Вторник');
//         break;
//     case 3:
//         console.log('Среда');
//         break;
//     case 4:
//         console.log('Четверг');
//         break;
//     case 5:
//         console.log('Пятница');
//         break;
//     case 6:
//         console.log('Суббота');
//         break;
//     case 7:
//         console.log('Воскресенье');
//         break;
//     default:
//         console.log('Неверно, повторите еще раз');
// }

//2
// let num = prompt('Введите число:');
// if ((num !== '') && (typeof Number(num) == 'number') && (!isNaN(num))) {
//     if (num % 2 == 0) {
//         alert(`Число ${num} четное`);
//     } else {
//         alert(`Число ${num} нечетное`);
//     }
// } else alert('Вы не ввели число');

//3
// let num1 = prompt('Введите первое число:');
// if ((num1 == '') || (typeof Number(num1) !== 'number') || (isNaN(num1))) {
//     alert('Вы не ввели число');
// } else {
//     let num2 = prompt('Введите второе число:');
//     if ((num2 == '') || (typeof Number(num2) !== 'number') || (isNaN(num2))) {
//         alert('Вы не ввели число');
//     } else {
//         if (num1 > num2) {
//             alert('Число ' + num1 + ' больше, чем ' + num2);
//         } else if (num1 < num2) {
//             alert('Число ' + num2 + ' больше, чем ' + num1);
//         } else {
//             alert('Числа равны');
//         }
//     }
// }

//4
// const arr1 = ['a', 'k', 'p'];
// const arr2 = ['i', 'o', 'z', 'e'];
// const arr3 = arr1.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(`В объедненном массиве ${arr3.length} элементов`);

//5
// const arr = [2, 5, 8, 1, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

//6
// function match() {
//     let isGame = false;
//     do {
//         let a = prompt('Введите число от 1 до 10');
//         let b = Math.floor(Math.random() * 10) + 1;

//         if (a == b) {
//             alert('You guessed it right!');
//             isGame = false;
//         } else {
//             alert('Sorry. You lost');
//             isGame = confirm("Хотите сыграть еще раз?");
//         }

//     } while (isGame)
// }

// match();

//7
// function dividers(num) {
//     if (num > 1000 && num > 0) {
//         return console.log('Число должно быть не больше 1000');
//     } else {
//         let arr = [];
//         for (let i = 1; i <= num; i++) {
//             if (num % i == 0) {
//                 arr.push(i);
//             }
//         }
//         return arr;
//     }
// }

//8
// function cube(num) {
//     return Math.pow(num, 3);
// }

//9
// function factorial(num) {
//     let total = 1;
//     for (i = 0; i < num; i++) {
//         total = total * (num - i);
//     }
//     return total;
// }

//10
// function check(num) {
//     if (num <= 1 || !Number.isInteger(num)) {
//         console.log('К простым и составным чисам относятся только натуральные числа больше единицы')
//     } else {
//         let isSimple = true;
//         for (i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 isSimple = false;
//                 break;
//             }
//         }

//         if (isSimple) {
//             console.log(`Число ${num} простое`);
//         } else {
//             console.log(`Число ${num} сложное`);
//         }
//     }
// }

//11
// let arr = ['Ferrary', 'Mazda', 'Ford', 'Opel', 'Mazda', 'Toyota', 'Ford'];
// console.log(arr);
// arr = arr.filter((el, pos) => (arr.indexOf(el) == pos));
// console.log(arr);

//12
// var numbers = [7, 21, 5, 10, 8];
// numbers.sort((a, b) => a - b)
// // numbers.sort(function(a, b) {
// //   return a - b;
// // }
// // );
// console.log(numbers);

// function binarySearch(sortedArr, ourNum) {
//     let start = 0;
//     let end = sortedArr.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (sortedArr[middle] === ourNum) {
//             return middle;
//         } else if (sortedArr[middle] < ourNum) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
// }

// const numbers = [7, 21, 5, 10, 8];
// console.log(numbers);

// function bubble(arr) {
//     let swapped, temp;
//     do {
//         swapped = false;
//         for (var i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
// }

// bubble(numbers);
// console.log(numbers);