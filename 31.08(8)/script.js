// //1. Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
// // С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
// // Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
//
// let person = {
//         firstName: 'Alex',
//         lastName: 'Svechkarev',
//         age: 20,
//         gender: 'male',
//         'e-mail': 'alexesveshkarev@gmail.com',
//         university: 'Nure'
//     }
// ;
// let field = prompt('Enter field', 'firstName');
//
// if (field in person)
//     alert(person[field]);
// else
//     person[field] = prompt('Enter value for field', 'black');
// let $person = $('.person');
//
// //2. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt
// // (например: brand, model, resolution, color...), не используя вспомогательные переменные.
// // Добавьте этот гаджет персоне, созданной ранее.
//
// let phone = {
//     brand: undefined,
//     model: undefined,
//     color: undefined,
//     number: undefined
// };
// phone.brand = prompt('Enter value for brand', '');
// phone.model = prompt('Enter value for model', '');
// phone.color = prompt('Enter value for color', '');
// phone.number = prompt('Enter value for number', '');
// person.phone = phone;
//
//
// //3.Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update.
// // В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте
// // персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt.
// // Какое значение будет у добавленного свойства - тоже берется из prompt.
// // При нажатии на Отмена при появлении prompt редактирование person заканчивается.
// // И обновленные данные распечатываются в консоли.
//
// while (true) {
//     let what = prompt('delete or update', 'delete');
//     if (what === 'delete') {
//         let field = prompt('What do you want to delete?', '');
//         delete person[field]
//     } else if (what === 'update') {
//         let field = prompt('What do you want to create?', '');
//         let value = prompt('Value for new field', '');
//         person[field] = value;
//     }
//     if (!!what === false) break;
//     console.log(person);
// }
//
// //4. Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in)
// // сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства
// // (работа с DOM - с использованием методов jQuery).
//
//
// let $dl = $('<dl>').appendTo('body');
// for (var key in person) {
//     if ( key === "phone") {
//         //Пытался сделать проверкой на тип, но у key всегда тип string
//         let $dt = $('<dt>').appendTo('dl');
//         $dt.append('<br>'+key).css('font-weight','bold');
//         for (var key2 in phone) {
//             let $dt2 = $('<dt>').appendTo('dl');
//             let $dd2 = $('<dd>').appendTo('dl');
//             $dt2.append(key2).css({'text-indent':'20px','font-weight':'bolder'});
//             $dd2.append(phone[key2]).css('text-indent','20px');
//         }
//         continue;
//     }
//     let $dt = $('<dt>').appendTo('dl');
//     let $dd = $('<dd>').appendTo('dl');
//     $dt.append(key).css('font-weight','bold');
//     $dd.append(person[key]);
//     console.log('type ' + typeof key);
//
// }
//

// //5. Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date)
// // минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd.
// // Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

// let firstDate = new Date;
// firstDate.setDate(firstDate.getDate() - 2);
// let secondDate = new Date;
// secondDate.setDate(secondDate.getDate() - 365);
// let inputDate = prompt('Input date. format yyyy-MM-dd', '2020-04-03');
// firstDate = Date.parse(firstDate);
// secondDate = Date.parse(secondDate);
// inputDate = Date.parse(inputDate);
// if (secondDate <= inputDate && inputDate <= firstDate)
//     alert('Input date is between the two specified dates');
// else alert('Input date is not between the two specified dates');

//6. Создайте структуру данных, полностью описывающую html-разметку картинки.
// С помощью методов jQuery добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

// let $img = $('<img src="">').appendTo('body');
// let img = {
//     src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
//     alt: '',
//     style: 'border: 1px solid #ccc',
//     width: 200
// };
// for (var key in img) {
//     $img.attr(key, img[key]);
// }