function dividers(num) {
    if (num > 1000 && num > 0) {
        return console.log('Число должно быть не больше 1000');
    } else {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
}