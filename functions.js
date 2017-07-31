/**
 * Created by Varin on 30/07/2017.
 */

$(function () {
    $('.hbtn').on('click', function (e) {
        e.preventDefault();
        var outer = $(this).prop('outerHTML');
        console.log(outer);
        klon = $(this).clone().css('margin-right', '20px');
        $('.class-helper').show().css('display', 'flex').empty().prepend('<pre></pre>').prepend(klon);
        $('.class-helper pre').text(outer);
    });
});


$(function () {
    $('.change').on('click', function (e) {
        e.preventDefault();
        $('.hbtn').toggleClass('hpill');
        $('.hbtn-x').toggleClass('hpill');
        $('.class-helper').hide();
        $(this).text(function(i, text){
            return text === "SWITCH TO SOFT!" ? "SWITCH TO SHARP!" : "SWITCH TO SOFT!";
        });
    });
});
