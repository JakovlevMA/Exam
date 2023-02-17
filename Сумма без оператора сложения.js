/// Калькулятор суммы без оператора сложения
function calcSum(a, b) {
    if (b === 0) {
        return a;
    } else {
        a++;
        b--;
        return calcSum(a, b)
    }
}

console.log(calcSum(46, 17))
