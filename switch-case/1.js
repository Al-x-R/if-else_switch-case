const num = prompt('Введите число от 1 до 4: ')

/**
 * Checks the number for compliance
 */
switch (num) {
    case '1':
        alert('Winter')
        break
    case '2':
        alert('Spring')
        break
    case '3':
        alert('Summer')
        break
    case '4':
        alert('Autumn')
        break
    default:
        alert('unknown value')
}