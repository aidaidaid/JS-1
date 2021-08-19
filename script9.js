function factorial(num) {
    if (num >= 0) {
        let total = 1;
        for (i = 0; i < num; i++) {
            total = total * (num - i);
        }
        return total;
    } else {
        console.log('Число должно быть целым неотрицательным')
    }
}