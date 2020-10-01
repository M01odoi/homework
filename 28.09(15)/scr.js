//Напишите программу, которая позволяет выбирать отдельные ячейки в наборе: при клике на ячейку она красится
// в черный цвет, при повторном клике - в белый:

let $restoredTable;
let $currentTable;
let $defaultTable;
function generation(x, y, teg) {
    $currentTable = $('<table>').appendTo(teg);
    for (let i = 0; i < x; i++) {
        let $tr = $('<tr>').appendTo($currentTable);
        for (let j = 0; j < y; j++) {
            let $td = $('<td>').appendTo($tr);
        }
    }

    SetTdOnClick();
}

function SetTdOnClick() {
    $('td').on('click', event => {
        let curr = event.currentTarget.style.background;
        if (curr.substr(0, 5) === 'black')
            event.currentTarget.style.background = 'white';
        else event.currentTarget.style.background = 'black';
    });
}
const x = 9,y=9;
const teg = 'article';
generation(x, y, teg);
$restoredTable = $currentTable.clone();

$('#clearBtn').on('click', () => {
    $restoredTable = $currentTable.clone();
    $currentTable.remove();
    generation(x, y, teg);
});

$('#restoreBtn').on('click', event => {
    $currentTable.remove();
    $currentTable = $restoredTable.appendTo(teg);
    SetTdOnClick();
});