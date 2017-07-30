/**
 * Created by Varin on 30/07/2017.
 */

$(function () {
    $('.hbtn, .hbtn-pill').on('click', function (e) {
        e.preventDefault();
        var outer = $(this).prop('outerHTML');
        console.log(outer);
        klon = $(this).clone().css('margin-right', '20px');
        $('.class-helper').show().css('display', 'flex').empty().text(outer).prepend(klon);
    });
});

