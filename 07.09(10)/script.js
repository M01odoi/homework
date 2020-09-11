//1.Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно,
// то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне.
// Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки.
// Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте
// с помощью функции, которая служит для дебага.


// function p(name, basic) {
//     return prompt(name, basic);
// }
//
// function a(name) {
//     alert(name);
// }
//
// function d() {
//     debugger;
// }
//
// d();
// let name = p('Enter your name', '');
// a(name);
//
// a('Hello World');

//2. Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая
// сравнивает два числа и возвращает большее:

let max = (a, b) => {
    if (a > b) return a;
    else return b;
};

console.log(max(0, -1));

//3.Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
// Функция принимает любое количество чисел и возвращает меньшее из них:

function min(numbers) {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;

}

console.log(min(0, -1, 100, 500, 100500));


//4. Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.

function findLongestWordLength(string) {
    let mas = string.split(' ');
    let maxWordLength = mas[0].length;
    for (let i = 0; i < mas.length; i++) {
        if (maxWordLength < mas[i].length)
            maxWordLength = mas[i + 1].length;
    }
    return maxWordLength;
}

console.log(findLongestWordLength('Аргентина манит негра'));

//5. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
// каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename.
// Используя встроенные функции массивов:
//      a. Отфильтруйте пользователей младше 18 лет
//      b. Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname,
//          если есть все три, и только firstname и lastname, если middlename нет
//      c. Сформируйте новый массив, который содержит только полное имя пользователей

let users = [];

users.push({firstName: 'Alex', lastName: 'Sve', age: 20},
    {firstName: 'Oleg', lastName: 'Babo', age: 12},
    {firstName: 'Vadim', middleName: 'der', lastName: 'Ardas', age: 91},
    {firstName: 'Liza', lastName: 'Babo', age: 13},
    {firstName: 'Leo', middleName: 'Di', lastName: 'Caprio', age: 55},
    {firstName: 'Cell', middleName: 'Der', lastName: 'Car', age: 15},
    {firstName: 'Alex', lastName: 'Pushkin', age: 200},
    {firstName: 'Roman', middleName: 'Ramzes', lastName: 'Kushnarev', age: 21},
    {firstName: 'Fall', middleName: 'Osen`', lastName: 'Autumn', age: 2020},
    {firstName: 'Cardi', lastName: 'Bi', age: 37}
);

console.log(users);

let less18 = users.filter(user => user.age < 18);
console.log(less18);

users.forEach(user => user.middleName ? user.fullName = user.firstName + ' ' + user.middleName + ' ' + user.lastName
    : user.fullName = user.firstName + ' ' + user.lastName);
console.log(users);

let newData = users.map(function (user) {
    return user.fullName;
});
console.log(newData);

//6.Не используя методы массива, напишите функцию аналог метода shift.
// Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

function shift(masiv) {
    let mas = [];
    for (let i = 0; i < arguments.length - 1; i++)
        mas[i] = arguments[i + 1];
    console.log(mas);
}

shift(0, 1, 2, 3, 4, 5, 6, 7, 8);

//7. Не используя методы массива, напишите функцию аналог метода массива push.
// Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

function push(masiv) {
    let count = parseInt(Math.random() * 5 + 3);
    console.log(count);
    for (let i = 0; i < count; i++) {
        arguments[arguments.length + i] = parseInt(Math.random() * 20);
    }
    console.log(arguments);
}

push(1, 2, 3, 4);

//8. Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект,
// поля которого будут изменены или расширены. Остальные параметры - объекты-источники,
// полями которых будет расширяться целевой объект.

function assign(obj, ...mas) {
    for (let i = 0; i < mas.length; i++)
        for (var key in mas[i])
            obj[key] = mas[i][key];
    return obj;
}

user = {
    name: 'Alex',
    age: 20
};
console.log(user);
var s = assign(user, {name: 'Kirill'}, {gender: 'Male'}, {nat: 'Ukrainian'});
console.log(s);

//9. Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает
// с помощью prompt вопрос question, ответ по умолчанию - defaultValue.
// Что делать с полученным значением - определяет callback

// function ask(question, defaultValue, callback) {
//     answer = prompt(question, defaultValue);
//     callback(answer);
// }
//
// ask('How old are you?', '10', function (response) {
//     console.log('response ' + response);
// });

//10. Найдите и исправьте ошибки в коде:
// function foo() {
//     function bar(a) {
//         i = 3;
//         return i + a;
//     }
//
//     for (var i = 0; i < 10; i++) {
//         console.log( bar(i * 2) );
//     }
// }
//
// foo(); // 3 5 7 9 11 13 15 17 19 21


function foo() {
    function bar(i) {
        a = 3;
        return i + a;
    }

    for (var i = 0; i < 10; i++) {
        console.log(bar(i * 2));
    }
}

foo(); // 3 5 7 9 11 13 15 17 19 21


//11. “История в картинках”. Создайте массив тематически связанных строковых картинок.
// Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива
// (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.

// let emojiMas = [];
// emojiMas.push('&#128564;', '&#128524;', '&#129316;', '&#9200;', '&#129320;', '&#128532;');
// console.log(emojiMas);
// let j = 0;
// let $h3 = $('<h3>').appendTo('body');
// let $div = $('<div>').appendTo('body');
// $('<h1>').appendTo('div').text('Х/ф Сон');
// console.log(emojiMas);
//
// function emodji(emojiMas) {
//
//     let mas = [];
//     for (let i = 0; i < arguments.length; i++)
//         mas[i] = arguments[i];
//
//     $div.empty();
//     $h3.text('Х/ф Сон');
//
//     $div.append(mas[0][j]);
//     j++;
//
//     if (j === mas[0].length) j = 0;
//
// }
//
// let interval = setInterval(emodji, 1500, emojiMas);
// setTimeout(() => {
//     clearInterval(interval);
//     $('<h1>').appendTo('div').text('Конец');
// }, 19000);
