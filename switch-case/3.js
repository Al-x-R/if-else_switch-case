const val = prompt('Введите число 1 - 12: ')
const month = Number(val)

/**
 * Checks the number for compliance
 */
switch (true) {
    case  month === 1 || month === 2 || month === 12:
        alert('winter')
        break
    case month === 3 || month === 4 || month === 5:
        alert('spring')
        break
    case month === 6 || month === 7 || month === 8:
        alert('summer')
        break
    case month === 9 || month === 10 || month === 11:
        alert('autumn')
        break
    default:
        alert('unknown value')
}