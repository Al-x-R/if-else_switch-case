const str = prompt('enter the numbers: ')

/**
 * Checks the numbers for compliance
 */
if (str.charAt(0) === '1' || str.charAt(0) === '2' || str.charAt(0) === '3') {
    alert('yes')
} else {
    alert('no')
}