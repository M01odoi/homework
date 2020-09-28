//1. Добавьте в прототип конструктора Date метод для форматирования любой даты по определенному формату:
//Date.prototype.format. Символы форматирования частей даты можете взять любые из существующих, в примере - отсюда

Date.prototype.format = function (string) {
    String(string).toLowerCase();
    let str = String(string).toLowerCase();
    let mas = str.split('');
    let date = this.valueOf();
    date = new Date(date);
    for (let i = 0; i < mas.length; i++)
        if (mas[i] === 'y')
            mas[i] = date.getFullYear().toString();
        else if (mas[i] === 'm')
            mas[i] = (date.getMonth() + 1).toString();
        else if (mas[i] === 'd')
            mas[i] = date.getDate().toString();
        else if (mas[i] === 'h')
            mas[i] = date.getHours().toString();
        else if (mas[i] === 'i')
            mas[i] = date.getMinutes().toString();
        else if (mas[i] === 's')
            mas[i] = date.getSeconds().toString();
    str = mas.join('');
    return str;
};

let d = new Date();
let dat = new Date(2018, 9, 10, 20, 0, 0);
d = d.format('h-i-s-d-m-y');//i = minutes
dat = dat.format('Y-m-d');
console.log(d); // Date now
console.log(dat); // 2018-09-10

//2.Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам.
// Метод изменяет исходный массив

Array.prototype.swap = function (first, second) {
    let mas = this.valueOf();
    [mas[first], mas[second]] = [mas[second], mas[first]];
    return mas;
};


let data = ['a', 'c', 'b'];
console.log(data);
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]


//3.
// В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство health -
// которое определяет базовые боевые возможности игрока (выносливость), и power - сила удара.
// Оба свойства определяются при создании экземпляра класса. Также игрок должен иметь метод hit для нанесения удара
// другому игроку. При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, который
// наносит удар. Также все игроки имеют возможность лечиться - метод heal.
// Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
// Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями.
// И напишите пример боя, используя соответствующие методы и свойства.

function Warrior(hp, power, name) {
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.power = power;
    this.alive = true;
}

Warrior.prototype.hit = function (another) {
    let powerHit = parseInt(this.power + (Math.random() * 20 - 10));

    if (Math.random() < 0.1)
        return console.log(`Miss! ${this.name} is missing!`);
    if (another.hp < powerHit)
        another.hp = 0;
    else another.hp = another.hp - powerHit;
};

Warrior.prototype.heal = function () {
    if (this.hp === this.maxHp)
        return this.hp;
    if (this.hp !== 0)
        this.hp += parseInt(Math.random() * 50);
};


let Wk = new Warrior(1000, 100, 'Wk');
let Monkey = new Warrior(800, 150, 'Monkey');
let Phoenix = new Warrior(900, 130, 'Phoenix');

for (let i = 0; ; i++) {
    let rand = Math.random().toFixed(2);
    let heroForAttack;

    if (rand < 0.33 && Wk.alive === true) {

        heroForAttack = Math.random() < 0.5 ? (Monkey.alive === true ? Monkey : Phoenix) : (Phoenix.alive === true ? Phoenix : Monkey);

        Wk.hit(heroForAttack);
        Wk.heal();
        console.log(`${i + 1}. 👊 ${Wk.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 👊
    🩸 ${Wk.name} healed. ${Wk.name} ${Wk.hp} hp 🩸`);
        if (heroForAttack.hp === 0) {
            console.log('💀 '+heroForAttack.name + ' is dead 💀');
            heroForAttack.alive = false;
        }

    } else if (rand < 0.66 && Phoenix.alive === true) {


        heroForAttack = Math.random() < 0.5 ? (Wk.alive === true ? Wk : Monkey) : (Monkey.alive === true ? Monkey : Wk);

        Phoenix.hit(heroForAttack);

        Phoenix.heal();
        console.log(`${i + 1}. 👊 ${Phoenix.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 👊
    🩸 ${Phoenix.name} healed. ${Phoenix.name} ${Phoenix.hp} hp 🩸`);
        if (heroForAttack.hp === 0) {
            console.log('💀 '+heroForAttack.name + ' is dead 💀');
            heroForAttack.alive = false;
        }

    } else if (rand >= 0.66 && Monkey.alive === true) {

        heroForAttack = Math.random() < 0.5 ? (Phoenix.alive === true ? Phoenix : Wk) : (Wk.alive === true ? Wk : Phoenix);

        Monkey.hit(heroForAttack);
        Monkey.heal();
        console.log(`${i + 1}. 👊 ${Monkey.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 👊
    🩸 ${Monkey.name} healed. ${Monkey.name} ${Monkey.hp} hp 🩸`);
        if (heroForAttack.hp === 0) {
            console.log('💀 '+heroForAttack.name + ' is dead 💀');
            heroForAttack.alive = false;
        }
    }

    if (Wk.hp <= 0 && Monkey.hp <= 0) {
        console.log(`🥇🏆${Phoenix.name} is winning!🏆🥇`);
        break;
    } else if (Phoenix.hp <= 0 && Monkey.hp <= 0) {
        console.log(`🥇🏆${Wk.name} is winning!🏆🥇`);
        break;
    } else if (Phoenix.hp <= 0 && Wk.hp <= 0) {
        console.log(`🥇🏆${Monkey.name} is winning!🏆🥇`);
        break;
    }
}








