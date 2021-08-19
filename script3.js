let num1 = prompt('Введите первое число:');
if ((num1 == '') || (typeof Number(num1) !== 'number') || (isNaN(num1))) {
    alert('Вы не ввели число');
} else {
    let num2 = prompt('Введите второе число:');
    if ((num2 == '') || (typeof Number(num2) !== 'number') || (isNaN(num2))) {
        alert('Вы не ввели число');
    } else {
        if (num1 > num2) {
            alert('Число ' + num1 + ' больше, чем ' + num2);
        } else if (num1 < num2) {
            alert('Число ' + num2 + ' больше, чем ' + num1);
        } else {
            alert('Числа равны');
        }
    }
}