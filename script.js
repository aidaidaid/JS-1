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
//         console.log('Не верно, повторите еще раз');
// }

//2
// let num = prompt('Введите число:');

// if (num % 2 == 0) {
//     alert('Число ' + num + ' четное');
// } else {
//     alert('Число ' + num + ' нечетное');
// }

//3
// let num1 = prompt('Введите первое число:');
// let num2 = prompt('Введите второе число:');

// if (num1 > num2) {
//     alert('Число ' + num1 + ' больше, чем ' + num2);
// } else if (num1 < num2) {
//     alert('Число ' + num2 + ' больше, чем ' + num1);
// } else {
//     alert('Числа равны');
// }

//4
// const arr1 = ['a', 'k', 'p'];
// const arr2 = ['i', 'o', 'z', 'e'];
// const arr3 = arr1.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

//5
// const arr = [2, 5, 8, 1, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

//6
// function match() {
//     let a = prompt('Введите число от 1 до 10');
//     let b = Math.floor(Math.random() * 10) + 1;

//     if (a == b) alert('You guessed it right!');
//     else alert('Sorry. You lost');
// }

// match();

//7

//8
function cubed(n) {
    return Math.pow(n, 3);
}

//9
function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}