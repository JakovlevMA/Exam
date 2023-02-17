/// Функция конструктор позволяет создавать объект и придавать новые параметры, пишется с большой буквы, для присваивания нужно new

function User(name) {
    this.name = name;
    this.age = 36;
}

let user = new User("ann");
console.log(user) /// новый объект
console.log(user.name) /// свойства объекта
console.log(user.age) /// свойства объекта