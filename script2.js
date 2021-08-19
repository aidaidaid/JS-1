let num = prompt('Введите число:');
if ((num !== '') && (typeof Number(num) == 'number') && (!isNaN(num))) {
    if (num % 2 == 0) {
        alert(`Число ${num} четное`);
    } else {
        alert(`Число ${num} нечетное`);
    }
} else alert('Вы не ввели число');