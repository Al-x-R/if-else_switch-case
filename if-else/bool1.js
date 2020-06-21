const text = prompt('Введите 0 или 1')
const test = Boolean(Number(text))

if (test === true) {
    alert('Верно')
} else {
    alert('Неверно')
}