var brush = "white";//Изначально кисть белая

$(document).ready(function () { //Когда страница прогружена

    $('.colors td').on('click',function () { //Вешаем событие клиека на каждую ячейку таблицы с цветами
        brush = $(this).data('color');//Красим кисть
    });

    $('.draw td').on('mousedown',function () { //Событие на клик по ячейке для рисования
        $(this).css('background-color',brush);
    });

    $('.draw td').on('mouseover',function (e) { //Событие на наведение зажатой мыши
        if(e.which===1) $(this).css('background-color',brush);
    });
});