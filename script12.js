const numbers = [7, 21, 5, 10, 8];
console.log(numbers);

function bubble(arr) {
    let swapped, temp;
    do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubble(numbers);
console.log(numbers);