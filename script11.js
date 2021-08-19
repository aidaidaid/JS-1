let arr = ['Ferrary', 'Mazda', 'Ford', 'Opel', 'Mazda', 'Toyota', 'Ford'];
console.log(arr);
arr = arr.filter((el, pos) => (arr.indexOf(el) == pos));
console.log(arr);