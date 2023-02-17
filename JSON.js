/// Метод JSON нужен, чтобы преобразовать объект в примитив - строку и обратно в объект
let obj = {a: 1, b: 2, c: 3}

let str = JSON.stringify(obj) /// преобразует в строку
console.log(str)
let object = JSON.parse(str) /// обратно в объект
console.log(object)
