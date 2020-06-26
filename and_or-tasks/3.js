const num = prompt('Введите число: ')
const a = Number(num)
const num2 = prompt('Введите число: ')
const b = Number(num2)

/**
 * Checks the number for compliance
 */
if (a <= 1 && b >= 3) {
    alert(a + b)
} else {
    alert(a - b)
}