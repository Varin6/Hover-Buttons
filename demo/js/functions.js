/**
 * Created by Varin on 30/07/2017.
 */

$(function () {
    setTimeout(helperInit, 100);
});


function helperInit () {
    $('.hbtn').not($('.hbtn-x')).on('click', function (e) {
        e.preventDefault();
        var outer = $(this).prop('outerHTML');
        console.log(outer);
        klon = $(this).clone().css('margin-right', '20px');

        $('.class-helper .class-helper__inner').css('display', 'flex').empty().prepend('<pre></pre>').prepend(klon);
        $('.class-helper .class-helper__inner pre').text(outer);
        $('.class-helper').slideDown();
    });
}


$(function () {
    $('.change').on('click', function (e) {
        e.preventDefault();
        $('.hbtn').not($('.hbtn-x')).toggleClass('hpill');
        $(this).toggleClass('hpill');
        $('.class-helper').slideUp();
        $(this).text(function(i, text){
            return text === "SWITCH TO SOFT!" ? "SWITCH TO SHARP!" : "SWITCH TO SOFT!";
        });
    });
});

$(function () {
    $('.close-icon').on('click', function () {
        $('.class-helper').slideUp();
    });
});




$(function () {

});







$('.hbtn').not($('.hbtn-x')).on('click', function (e) {

});