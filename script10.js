function check(num) {
    if (num <= 1 || !Number.isInteger(num)) {
        console.log('К простым и составным чисам относятся только натуральные числа больше единицы')
    } else {
        let isSimple = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isSimple = false;
                break;
            }
        }

        if (isSimple) {
            console.log(`Число ${num} простое`);
        } else {
            console.log(`Число ${num} сложное`);
        }
    }
}