

//2.

// var x = prompt('Speed for your snail', '10');
// if (x > 0) {
//     alert('Snail moving up');
// } else if (x==0) {
//     alert('Snail not moving');
// } else {
//     alert('Snail moving down');
// }

//3.

// var myMoney = prompt('How much money do you have?','228');
// var friendMoney = prompt('How much money does a friend have?','4');
// var allMoney = +myMoney+(+friendMoney);
// if(allMoney<1000)
//     alert('You can drink some beer  ');
// else if(allMoney>10000)
//     alert('You can fly to Malta  ' );
// else
//     alert('You can learn English  ');

//4.

// var age = prompt('How old are you?','23');
// if(age<30 && age>=20)
//     alert('ВАМ ПОВЕСТКА  ' + age);

//5.

// var bus = +prompt('How number of this bus?', '13');
// if (bus === 7 || bus === 225 || bus === 255) {
//     alert('Ride to home, bruh');
// }
// else {
//     alert('Wait for next bus');
// }

//6.
//
// var day = prompt('What day of the week is it', 'Monday');
// if (day === 'Saturday' || day === 'Sunday');
// else
//     alert("Go to work, bitch");


//7.
// var greeting, lang;
// lang = prompt('Your lang(ru,en,de)','ru');
// if (lang==='ru'){
//     greeting = 'Привет, незнакомец!';
// }
// else if (lang ==='en') {
//     greeting= 'Hello, stranger!';
// }
// else if (lang ==='de'){
//     greeting='Hallo, fremder!';
// }
// alert(greeting);

// //
// var greeting, lang;
// lang = prompt('Your lang(ru,en,de)','ru');
//
// switch (lang) {
//     case 'ru':greeting='Привет, незнакомец!';break;
//     case 'en':greeting='Hello, stranger!';break;
//     case 'de':greeting='Hallo, fremder!';break;
//     default: greeting='undefined lang';
// }
//
// alert(greeting);


//8.
// var month=new Date().getMonth();
// if(month===11 ||month===0 ||month===1)
//     alert('Winter');
// else if (month===2 ||month===3 ||month===4)
//     alert('Spring');
// else if (month===5 ||month===6 ||month===7)
//     alert('Summer');
// else if (month===8 ||month===9 ||month===10)
//     alert('Fall');

//9.
// var result;
// var lang = prompt('Your lang(ru,en)', 'ru');
// var day = new Date().getDay()-1;
// if (lang === 'ru') {
//     switch (day) {
//         case 0 : result='Понедельник';break;
//         case 1 : result='Вторник';break;
//         case 2 : result='Среда';break;
//         case 3 : result='Четверг';break;
//         case 4 : result='Пятница';break;
//         case 5 : result='Суббота';break;
//         case 6 : result='Воскресение';break;
//         default : result='undefined';
//     }
// }
// else if (lang === 'en') {
//     switch (day) {
//         case 0 : result='Monday';break;
//         case 1 : result='Tuesday';break;
//         case 2 : result='Wednesday';break;
//         case 3 : result='Thursday';break;
//         case 4 : result='Friday';break;
//         case 5 : result='Saturday';break;
//         case 6 : result='Sunday';break;
//         default : result='undefined';
//     }
// }
// alert(result);

//10.

var x = +prompt('x', '0');
var error;

switch (String(x)) {
    case '0':
        error = 'На ноль делить нельзя';
        break;
    case '1':
        error = 'На единицу делить бессмысленно';
        break;
    case 'NaN':
        error = 'Не математическая операция';
        break;
    default :
        error = 0;
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}
