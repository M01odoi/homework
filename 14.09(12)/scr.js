//1. Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное
//
let calculator = {
    read: function () {
        let x = +prompt('Enter x', '5');
        let y = +prompt('Enter y', '7');
        calculator.x = x;
        calculator.y = y;
    },
    sum: function () {
        return this.x + this.y;
    },
    multi: function () {
        return this.x * this.y;
    },
    diff: function () {
        return this.x - this.y;
    },
    div: function () {
        return this.x / this.y;
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

//2. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
// при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением,
// записанным в свойстве объекта message.

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start() {
        setTimeout(function () {
            alert(this.message);
        }.bind(this), 3000);
    }
};
coffeeMachine.start();

//3. Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта,
// содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из
// пользователей персонально.

function hello() {
    alert('Hello, '+this.firstname + ' ' + this.lastname)
}

let user1 = {
    firstname: 'Alex',
    lastname: 'Svechkarev'
};

let user2 = {
    firstname: 'Kate',
    lastname: 'Koguhar'
};

hello.call(user1);
hello.call(user2);


//4. Создайте объект array с методом инициализации начального значения массива, c методами добавления,
// удаления последнего элемента массива и методом возврата текущего состояния массива.
// Используйте концепцию chaining для создания цепочки вызовов.

let array = {
    mas: [],
    setValue: function ([first]) {
        //Как компилятор понимает, что в данном случае [] - массив, а не строчные символы?
        this.mas = [first];
        return this;
    },
    push: function (number) {
        this.mas.push(number);
        return this;
    },
    pop: function () {
        this.mas.pop();
        return this;
        },
    getValue: function () {
        return this.mas;
    }
};

array
    .setValue([1])
    .push(2)
    .push(3)
    .push(3)
    .pop();


var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]



//5. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.
// Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.
// Для расчетов все методы используют функционал ранее созданного калькулятора.

let getter = {
    x: 10,
    y: 5,
    getSum: function () {
        alert(`${this.x} + ${this.y} = ${calculator.sum.call(this)}`);
    },
    getDiff: function () {
        alert(`${this.x} - ${this.y} = ${calculator.diff.call(this)}`);
    },
    getMulti: function () {
        alert(`${this.x} * ${this.y} = ${calculator.multi.call(this)}`);
    },
    getDiv: function () {
        alert(`${this.x} / ${this.y} = ${calculator.div.call(this)}`);
    }
};

getter.getSum();
getter.getDiff();
getter.getMulti();
getter.getDiv();


//6. Есть следующий код:

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

//Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call(country,'',''); // Ukraine
format.apply(country,['[',']']); // [Ukraine]
format.call(country.capital,'',''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
format.apply(country.name, ['','']); // undefined

//7. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

let user = {
    name: 'Alex'
};


function format(start, end) {
    console.log(start + this.name + end);
}

user.userFormat = format;
user.userFormat('<<<', '>>>');

//Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
let format2 = (function (start, end) {
    return `${start}${user.name}${end}`;
})('<<', '>>');

console.log(format2);
//Метод bind().
let form = format.bind(null, '<');
let format3 = function (start, end) {
    return form(user.name + '>'); //другого способа не нашел
};
format3();

//8. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и
// строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая
// выводит приветствие тому, кто передан в ее параметре:

let concat = function (strFirst, strSec, comma) {
    return strFirst + comma + strSec;
};

console.log(concat('Первая причина', 'Это ты!', ' - '));

let hello = function (username) {

    let form = concat.bind(null, 'Hello', ' - ');
    console.log(form(username));
};
hello('World');

//HARD “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText.
// Метод appendTo с помощью jQuery или Native JS добавляет абзац в контейнер, переданный в параметре метода.
// Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите цикл по этому массиву.
// С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий
// по порядку элемент массива. Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву.

let obj = {
    delay: 1000,
    appendTo: function (container) {
        let $p = $('<p>').appendTo(container);
        appendText('Мама Мыла Раму');

        function appendText(str) {

            displaySymbol(0);

            function displaySymbol(index) {
                if (index < str.length) {
                    $p.append(str[index]);
                    setTimeout(displaySymbol, 1000, ++index);
                }
            }

            return str;
        }
    }
};

console.log(obj.appendTo('body'));