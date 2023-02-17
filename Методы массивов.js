/// Методы массивов (рор, push, shift, unshift, splice, slice, concat)

let array = [1, 2, 3, 4, 5]
array.pop()  /// удаляет элемент с конца
array.push(5)  /// добавляет элемент в конец
array.shift()  /// удаляет элемент в начале
array.unshift(1) /// добавляет элемент в начало
console.log(array)
console.log(array.splice(1, 2))  /// удаляет элемент с индекса 1 до индекса 2
console.log(array.slice(1, 3)) /// копирует элементы массива начиная с индекса 1, до конца массива (в нашем случае 3)
console.log(array.concat([6, 7, 8,])) /// копирует элементы массива и добавляет указанные значения (6, 7, 8)

/// и другие методы map, forEach
