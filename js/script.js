var brush = "white";//Изначально кисть белая

$(document).ready(function () { //Когда страница прогружена

    $('.colors td').on('click',function () { //Вешаем событие клиека на каждую ячейку таблицы с цветами
        brush = $(this).data('color');//Красим кисть
    });

    $('.draw td').on('click',function () { //Событие на клик по ячейке для рисования
        $(this).mousedown();
    });

    $('.draw td').on('mousedown',function () { //Событие на наведение зажатой мыши
        $(this).css('background-color',brush);
    });
});