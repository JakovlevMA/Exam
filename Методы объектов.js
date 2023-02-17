///  Методы keys, values, entries

let obj = {key1: 1, key2: 2, key3: 3}

let keys = Object.keys(obj)
let values = Object.values(obj)
let entries = Object.entries(obj)

console.log(keys) /// выводит только ключи в массив
console.log(values) /// выводит только значение ключей в массив
console.log(entries) /// выводит ключ значение пар: ключ значение в общий массив