/// WeakSet – это Set-подобная коллекция,
// которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.

let visiters = new WeakSet()
let user1 = {name: "John"}
let user2 = {name: "Ann"}
let user3 = {name: "Abby"}
visiters.add(user1)
visiters.add(user2)
visiters.add(user1)

/// сейчас коллекция WeakSet() содержит 2 пользователей user1 и user2

console.log(visiters.has(user1)) /// юзер 1 заходил к нам
console.log(visiters.has(user2)) /// юзер 2 тоже
console.log(visiters.has(user3)) /// А вот юзер 3 уже увы, нет
user1 = null /// удаляем юзера и проверяем, заходил ли он?
console.log(visiters.has(user1)) /// коллекция WeakSet() также очистилась от посещения юзера 1, поэтому false

/// В чем разница между Set и WeakSet?
/// У weakSet нельзя узнать длину, так как он очищается сборщиком мусора, нельзя перебирать объекты циклом for...in
/// и он может принимать в себя только объекты, другие значения ему недоступны в отличие от Set