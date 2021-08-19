function match() {
    let isGame = false;
    do {
        let a = prompt('Введите число от 1 до 10');
        let b = Math.floor(Math.random() * 10) + 1;

        if (a == b) {
            alert('You guessed it right!');
            isGame = false;
        } else {
            alert('Sorry. You lost');
            isGame = confirm("Хотите сыграть еще раз?");
        }

    } while (isGame)
}

match();