//1. Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное
// и минимальное и возвращает их
function highAndLow(string) {
    let mas = string.split(' ');
    let max = +mas[0], min = +mas[0];
    mas.forEach(item => {
        if (+item > max) max = +item;
        if (+item < min) min = +item;
    });
    return String(`${max} ${min}`);
}

// console.log(highAndLow('1 23 4 54 -45 -21'));

var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log(result); // "542 -214"

//2. Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true,
// если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте
//метод every или some

function checkNumber(mas) {
    let bool = true;
    mas.forEach(item => {
        if (isNaN(+item))
            return bool = false;
    });
    return bool;
}


console.log(checkNumber([1, 2, '3', 'a'])); // false
console.log(checkNumber([1, 2, '3', '4'])); // true

//3. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл
// b) используя рекурсию:

function cube(number) {
    let cube = 1;
    for (let i = 0; i < 3; i++)
        cube *= number;
    return cube;
}

console.log(cube(2));

function cubeR(number, power) {
    if (power === 1) return number;
    else {
        power--;
        return number * cubeR(number, power);
    }
}

console.log(cubeR(2, 3));

//4. Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив числовых значений 
// и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof). 
// Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.

function extraCube(elem) {
    if (typeof elem === "object") {
        for (let i = 0; i < elem.length; i++)
            elem[i] = cubeR(elem[i], 3);
        return elem;
    } else if (typeof elem === "number") {
        return cube(elem);
    }
}


console.log(extraCube(3)); // 8
console.log(extraCube([0, 1, 2, 3])); // [0, 1, 8, 27]


//5. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии

function sum(...mas) {
    // return mas[0];
    //     debugger;
    let sum = 0;
    let elem = 0;
    add(elem);

    function add(elem) {
        if (elem === mas.length) return sum;
        else {
            sum += mas[elem];
            elem++;
            return add(elem);
        }
    }

    return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

//6. Дан массив, элементами которого могут быть любые значения, включая другие массивы. Напишите функцию flat,
// которая рекурсивно “разворачивает” переданный массив на глубину depth, указанную в параметре функции.
// По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).

function flat(mas, depth) {
    let ourMas = mas.slice();
    if (depth === undefined) depth = 1;
    if (depth === 0) {
        return ourMas;
    } else {
        for (let i = 0; i < ourMas.length; i++) {
            if (typeof ourMas[i] === "object") {
                for (let j = 0; j < ourMas[i].length; j++)
                    ourMas.push(ourMas[i][j]);
                ourMas.splice(i, 1);
                return flat(ourMas, --depth);
            }
        }
        return ourMas;
    }
}

var data1 = [1, 2, [3, 4, [5, 6]]];
console.log(flat(data1)); // [1, 2, 3, 4, [5, 6]]

var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat(data2, 1)); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
console.log(flat(data2, 2)); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
console.log(flat(data2, 3)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log(flat(data2, 4)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(flat(data2, 0)); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(flat(data2, 5)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Замыкания
//1. Используя замыкание, напишите функцию createTimer, которая использует метод performance.now()
// для получения текущей временной метки и служит для замера времени выполнения другого кода:

function createTimer() {
   let a = performance.now();
   return () => {
        return performance.now()-a;
    }
}


var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


//2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр
// и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

function createAdder(greeting) {
    return (name) => {
       return greeting +name;
    }
}

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
