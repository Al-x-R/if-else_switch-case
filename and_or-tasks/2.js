const num = prompt('Введите число: ')
let a = Number(num)

/**
 * Checks the number for compliance
 */
if (a === 0 || a === 2) {
    a += 7
    alert(a)
} else {
    a /= 10
    alert(a)
}