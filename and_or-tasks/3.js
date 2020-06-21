const num = prompt('Введите число: ')
let a = Number(num)
const num2 = prompt('Введите число: ')
let b = Number(num2)

/**
 * Checks the number for compliance
 */
if (a <= 1 && b >= 3) {
    alert(a + b)
} else {
    alert(a - b)
}