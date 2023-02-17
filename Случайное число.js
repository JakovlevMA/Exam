/// сгенерировать случайное целое число в заданном диапазоне /// задачу нашел и скопировал, честно)))

let randomNumber = (minNum, maxNum) => {
    minNum = Math.ceil(minNum)
    maxNum = Math.ceil(maxNum)
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

console.log(randomNumber(1, 256))