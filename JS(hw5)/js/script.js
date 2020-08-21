/*1. Неправильный код
'use strict';
var x = prompt('Введите Х', '1')
    y = prompt('Введите Y','1');

alert( 'Сумма: ' + x + y );
*/

// // Правильный код
'use strict';
var x = prompt('Введите Х', '1');
var y = prompt('Введите Y','1');
var z = Number(x)+Number(y);
alert( 'Сумма: '+ z );

// //2.
// var first = Math.random();
// first*=100;
// first = parseInt(first);
// var second = 3*first;
// var third = first+second;
// alert('First numb '+first+'; Second numb '+second+'; Third numb '+third);

// //3.
// var firstName, lastName;
// firstName = prompt('What is your name', 'john');
// lastName = prompt('What about your female?', 'Doe');
// alert('What\'s up ' + firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1));

// //4.
// var x, y;
// x = prompt('Input number for x ','322');
// y = prompt('Input number for y ','228');
// alert(Number(x)*Number(y));
// alert(Number(x)/Number(y));
// alert(Number(x)-Number(y));
// alert(Number(x)+Number(y));

// //5.
// var distance = 384400;
// var speed = prompt('Speed your spaceship (km for hour)','500');
// var time = distance/speed;
// alert('You need '+time + ' hours to fly to the Moon from Earth');

// //6.
// var number;
// number = prompt('Input number','23');
// var bool = number%2;
// bool = Boolean(bool);
// alert(bool + '\n[If false input number odd(chetnoe), if true - even(nechetnoe)]');

// //7.
// var number;
// number = prompt('Input number','23');
// number = Boolean(+number);
// alert(number + '\n[If false input NaN, if true - number]');

// //8.
// var byte = prompt('How many bytes?', '1234567890');
// var  kilobyte, megabyte, gigabyte;
// kilobyte = (byte / 1000);
// megabyte = (kilobyte / 1000);
// gigabyte = (megabyte / 1000);
// alert('Basic number ' + byte + '\ngigabyte ' + gigabyte.toFixed(2)+' Gb' + '\nmegabyte ' + megabyte.toFixed(2) +
//     ' Mb'+ '\nkilobyte ' + kilobyte.toFixed(2) +' Kb' + '\nbyte ' + byte);

// //9.
// var N = prompt('How many apples were there?',12);
// var eaten = prompt('How many apples eaten', 4);
// var summary = !Boolean(N-eaten);
// alert(summary+'\n[If false - there are still apples.\nIf true - ate all the apples.]');

// //10.
// var first, second, third;
// first = prompt('First px', '98px');
// second = prompt('Second px', '103px');
// third = prompt('Third px', '69px');
// first=first.slice(0,length-2);
// second = second.slice(0,length-2);
// third = third.slice(0,length-2);
// alert('Max= ' + Math.max(first,second,third));

// //11.
// let x = parseInt(Math.random() * 100);
// let y = prompt('Your number is ', '51');
// alert('x < y = ' + Boolean(x < y) + ', x = ' + x + ', y = ' + y);