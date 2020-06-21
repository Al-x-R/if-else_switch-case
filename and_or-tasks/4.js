const num = prompt('Введите число: ')
let a = Number(num)
const num2 = prompt('Введите число: ')
let b = Number(num2)

/**
 * Checks the number for compliance
 */
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    alert('Верно')
} else {
    alert('Неверно')
}