//2.Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.

// let $squareNumber = $('#squareNumber');
//
// let max = +prompt('Input max number', '7');
// $squareNumber.append('Max number '+ max+'<br><br>');
// for (let i = 2; i <= max; i++) {
//     if (i % 2 === 0) {
//         $squareNumber.append(i + 'x' + i + '=' + i * i + '<br>');
//     }
// }


//3. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

// let izi = false, CancelButton = 0;
// while (izi === false) {
//     izi = confirm('You can`t click at Cancel');
//     if (izi === false) {
//         CancelButton++;
//         alert(CancelButton + ' times you click Cancel button!');
//     }
// }

//4. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона,
// введенного пользователем. Результат отобразите в окне alert.

// let sum=0;
// let range = +prompt('Input max number range','13');
// for(let i=1;i<=range;i++){
//     if(i%2===1){
//         sum+=i;
//     }
// }
// alert(sum+' odds for range from 1 to '+range);

//5.Напишите бесконечный цикл, который прерывается при помощи команды break,
// когда Math.random() > 0.99. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

// let $numbers = $('#numbers');
// let count = 0, x;
// while (true) {
//     x = Math.random();
//     count++;
//     $numbers.append(count+' ');
//     if (x > 0.99) break;
// }
// alert(x);
//


//6. Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for.
// После выхода из цикла распечатайте полученную строку.

// let $string = $('#string');
// let range = +prompt('Input max number range', '13');
//
// for (let i = 0; i < range; i++) {
//     if (i % 2 === 0)
//         $string.append('.');
//     else $string.append('#');
// }

//7. Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом,
// чтобы получилась шахматный узор. Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#

// let $string = $('#string');
// let firstRange = +prompt('Input max number of height range', '8');
// let secondRange = +prompt('Input max number of length range', '16');
//
// for (let i = 0; i < firstRange; i++) {
//     for (let j = 0; j < secondRange; j++) {
//         if (i % 2 === 0) {
//             if (j % 2 === 0)
//                 $string.append('.');
//             else $string.append('#');
//         } else {
//             if (j % 2 === 0)
//                 $string.append('#');
//             else $string.append('.');
//         }
//     }
//     $string.append('<br>');
// }


// 8.С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...


// let $string = $('#string');
// let range = +prompt('Input max number range', '13');
// let firstNumber = 0;
// let secondNumber = 1;
// var summ =1;
// $string.append('row of the Fibonacci: '+ firstNumber+' '+secondNumber+' ');
//
// for(let i =0;i<range;i++){
//     summ=firstNumber+secondNumber;
//     $string.append(summ+' ');
//     firstNumber=secondNumber;
//     secondNumber=summ;
// }

//9.Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор,
// пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел,
// их общую сумму и среднее арифметическое.

// let $numbers = $('#numbers');
// var choose = true, count = 0, sum = 0, avg = 0;
// while (choose) {
//     choose = +prompt('Input number', '4');
//     if (choose === 0) break;
//     sum += choose;
//     count++;
// }
// avg = sum / count;
// $numbers.append('Count = ' + count + ', Sum = ' + sum + ', Avg = ' + avg);

//10. Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css,
// задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:
//
//
// Таблица расположена посредине страницы, расстояния между ее ячейками нет
// Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
// Фон в ячейках первых шести строк –#106B63
// Фон в ячейках строк 7-9 –#E7C610
// Фон в ячейках строк 10-12 – #C64A08
// Фон в ячейках строк 13-15 –#B43100
// Фон в ячейках всех оставшихся строк –#102173
// У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет

//
// let $table = $('#table table');
// let $tableTd = $('#table td');
// let $none = $('.none');
// $table.css({'margin': 'auto', 'border-collapse': 'collapse'});
// $tableTd.css({'background': '#102173', 'height': '10px', 'width': '10px', 'border': '1px solid #000'});
// $none.css({'background': 'none', 'border': 'none'});
//
// for (let i = 0; i < 15; i++) {
//     let $tableTdChild = $('#table tr:nth-child(' + i + ') td:not(.none)');
//     if (i < 6)
//         $tableTdChild.css('background', '#106B63');
//     else if (6 <= i && i < 9)
//         $tableTdChild.css('background', '#E7C610');
//     else if (9 <= i && i < 12)
//         $tableTdChild.css('background', '#C64A08');
//     else if (12 <= i && i < 15)
//         $tableTdChild.css('background', '#B43100');
// }
// let $tableTr = $('#table table tr');
//
// $tableTr.css({'background': '#eee'});

//11.Найдите и исправьте ошибки в коде:
//for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; i++) {
//         console.log(i + j);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i + j);
//     }
// }

//12. Сформируйте строку в виде треугольника-елочки:
//
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########

// let height = prompt('Your height', 5);
// let length = prompt('Your length', 11);
//
// let $string = $('#string');
// $string.css('textAlign','center');
// for (let i = 0; i < 6; i++) {
//     for (let q = 0; q < parseInt(11 / 2) - i; q++)
//         $string.append('.');
//     for (let q = 0; q < 11 - 2 * (parseInt(11 / 2) - i); q++)
//         $string.append('#');
//     for (let q = 0; q <parseInt( 11 / 2) - i; q++)
//         $string.append('.');
//     $string.append('<br>');
// }