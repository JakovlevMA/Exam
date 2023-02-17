/// Клонирование объекта

let user = {name: 'Ira', age: 20}
let clone = {} /// создаем пустой объект
for (let key in user) {      /// с помощью цикла копируем все ключи юзера в клон и получаем 2 независимых друг от друга объекта
    clone[key] = user[key]
}
console.log(clone)
/// или другой способ

let clone2 = Object.assign(user) /// метод для клонирования, заменяет цикл for
console.log(clone2)

