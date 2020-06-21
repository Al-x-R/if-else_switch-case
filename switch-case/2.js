const val = prompt('Введите число 1 - 31: ')
const day = Number(val)

/**
 * Checks the number for compliance
 */
switch (true) {
    case  day >= 1 && day <= 10:
        alert('first decade of the month')
        break
    case day >= 11 && day <= 20:
        alert('second decade of the month')
        break
    case day >= 21 && day <= 31:
        alert('third decade of the month')
        break
    default:
        alert('unknown value')
}