//1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
//Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// let numbers = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (isNaN(+numbers[i])) continue;
//     sum = sum + (+numbers[i]);
// }
// alert(sum);

//2. Сгенерируйте массив из N случайных чисел с двумя знаками после запятой.
//Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень.
// Для возведения в степень используйте вложенный цикл (не метод Math.pow(), не оператор **).


// let mas = [];
//
// for (let i = 0; i < 10; i++) {
//     mas[i] = Math.random().toFixed(2);
//     console.log(mas[i]);
//     let umno = mas[i];
//     for (let j = 0; j < 4; j++) {
//         umno = umno * mas[i];
//     }
//     mas[i] = umno;
// }
//
//     console.log(mas);

//3. Создайте массив из минимум 100 случайных целых чисел.
// Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся)
// значения исходного массива. Решите, используя только цикл for.

// let simpleMas = [];
// let uniMas = [];
// for (let i = 0; i < 100; i++)
//     simpleMas[i] = Math.random().toFixed(2);
//
//
// for (let i = 0; i < simpleMas.length; i++) {
//     let uni = true;
//     for (let j = 0; j < simpleMas.length; j++) {
//         if (simpleMas[i] === simpleMas[j] && i !== j) {
//            uni =false;
//         }
//     }
//     if(uni ===true)
//     uniMas.push(simpleMas[i]);
// }
//
// console.log(simpleMas, uniMas);

//4. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

// let fraimworks = ['AngularJS', 'jQuery'];
// fraimworks.unshift("Backbone.js");
// fraimworks.push('ReactJS', "Vue.js");
// fraimworks.splice(1, 0, 'CommonJS');
// console.log(fraimworks);
// for (let i = 0; i < fraimworks.length; i++) {
//     if (fraimworks[i] === 'jQuery') {
//         fraimworks.splice(i, 1);
//         alert('Это здесь лишнее');
//     }
// }
// console.log(fraimworks);


//5. Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’.
// Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива
// (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

// let wrongStr = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
// let trueStr = '';
// let mas = wrongStr.split(' ');
// mas.splice(4,2,'Городской','Сломал');
// trueStr = mas.join(' ');
// alert('Неправильно: '+wrongStr+'. Правильно: '+trueStr);

//6. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
// полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех
// чисел массива и выведите в alert полученный результат.

// let mas = [];
// let max = prompt('Input n(number)', '10');
// for (let i = 0; i < max; i++) {
//     let chars = prompt('Input symbols', '2');
//     mas.push(chars);
// }
// let sum = 0;
// for (let i = 0; i < mas.length; i++) {
//     if (isNaN(+mas[i])) continue;
//     sum += +(mas[i]);
// }
// console.log(mas, sum);
// alert(sum);

//7.Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

// let mas = [[]];
// for (let i = 0; i < 10; i++) {
//     mas[i]=[];
//     for (let j = 0; j < 10; j++) {
//         mas[i][j] = (i+1) + 'x' + (j+1) + '=' + (i+1) * (j+1);
//     }
// }
// console.log(mas);

//8. Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия значениям
// переменной (value) в логическом контексте (истина, ложь). Изобразите на странице.

let mas1 = [];
let mas1Str = [];
let mas2 = [];
mas1.push(true, false, 1, 0, "", "1", "0", null, undefined, {}, [], NaN);
mas1Str.push('true', 'false', '1', '0', "\"\"", '"1"', '"0"', 'null', 'undefined', '{ }', '[ ]', 'NaN');
mas2.push('if(value)');
for (let i = 0; i < 12; i++) {
    if (mas1[i]) mas2.push(true);
    else mas2.push(false);
}

let $h1 = $('<h1>').appendTo('body').text('if(condition)');
let $table = $('<table>').appendTo('body');
let $firstTr = $('<tr>').appendTo('table');
let $firstCell = $('<td>').appendTo('tr');
for (let i = 0; i < mas1Str.length; i++) {
    let $tdFistTr = $('<td>').appendTo('tr');
    $tdFistTr.text(mas1Str[i]);
    if (mas1Str[i].match('[a-zA-Z]+'))
        $tdFistTr.addClass('roll');
}
let $secondTr = $('<tr>').appendTo('table');
for (let i = 0; i < mas2.length; i++) {
    let $tdSecondTr = $('<td>').appendTo($secondTr);
    if (i === 0)
        $tdSecondTr.text(mas2[i]);
    else {
        if (mas2[i])
            $tdSecondTr.css('background', '#04c90b6f');
        else
            $tdSecondTr.css('background', '#fa3e3e6f');
    }
}
