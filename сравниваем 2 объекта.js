/// Сравниваем 2 объекта

let obj1 = {a: 1}
let obj2 = {a: 1}

console.log(obj1 === obj2)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) /// приравниваем к строке и сравниваем, через метод JSON