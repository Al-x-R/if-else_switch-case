const str = prompt('enter six digits: ')
const sum1 = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2))
const sum2 = Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5))

if (sum1 === sum2) {
    alert('Yes')
} else {
    alert('No')
}


