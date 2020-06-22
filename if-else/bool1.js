const text = prompt('Введите число')
const test = Boolean(Number(text))

if (test === true) {
    alert('Верно')
} else {
    alert('Неверно')
}

alert((test === true) ? 'Верно' : 'Неверно')