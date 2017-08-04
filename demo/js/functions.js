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


klasa = '.hb-fill-top';

$(function () {

    const findClassRules = (selector, stylesheet) => {
        // combine all rules from all stylesheets to a single array
        const allRules = stylesheet !== undefined ?
            Array.from((document.styleSheets[stylesheet] || {}).cssRules || [])
            :
            [].concat(...Array.from(document.styleSheets).map(({ cssRules }) => Array.from(cssRules)));

        // filter the rules by their selectorText
        return allRules.filter(({ selectorText }) => selectorText && selectorText.includes(selector));
    };


    // sheet - tabela ze stylesheet z wyszukana fraza
    // item - wpis w tabeli, row
    // string - selector ze zmiennej "item"
    // index - numer w tabeli

    var sheet = findClassRules(klasa, 2);

    //console.log(sheet);

        sheet.forEach(function(item, index, array) {
        var string = item.selectorText;

        //console.log(item, index);

        // var myRegexp = /string.(.*)/;
        // var match = myRegexp.exec(string);

        //var regex1 = new RegExp(''+klasa+'[^-\d].*');
        var regex1 = new RegExp(''+klasa+'[^-\\d].*');    //The correct one!!!!
        //var regex1 = new RegExp(''+klasa+':*');
            //var regex1 = new RegExp(`^\\${klasa}(:{1,2}\\w+)*$`)


        //console.log(regex1);

        var rule1 = string.match(regex1); // Znajdz te wpisy ktore zawieraja nazwe klasy

            console.log(rule1);

        var rulePodzielony = rule1;

        // jezeli wpis istnieje, to:
        if (rule1 != null) {
            //jezeli we wpisie wystepuja przecinki, podziel na tabele
            if (string.match(/,/)) {
                 podzielony = string.split(',');

                 podzielony.forEach(function(itemP, indexP) {
                     regexPodzielony = new RegExp(klasa+'.*');
                     indexPodzielony = podzielony.indexOf(klasa);
                     rulePodzielony = itemP.match(regexPodzielony);
                     if (rulePodzielony != null) {
                         console.log('rulePodzielony to: ' + rulePodzielony);
                         return rulePodzielony;
                     } else {
                         return rule1
                     }
                 });
            }

            if (rulePodzielony != '') {
                console.log('rulePodzielony to: ' + rulePodzielony);
            } else {
                console.log('rulePodzielony to: ' + rule1);
            }

            oko = new RegExp(rule1);
            //console.log(oko);

            itemCss = item.cssText;

            itemCss = itemCss.replace(oko, '');


            console.log('=================================');
            //console.log('Selector:   ' + rulePodzielony);
            console.log('CSS:   ' + itemCss);
            console.log('=================================');
        }




        // if (1 < string.match(/\./g).length) {
        //     return;
        // } else {
        var tabela = string.split(item, 2);

        //console.log(tabela, index);
        //}

    });


});

// var phrase = "yesthisismyphrase=thisiswhatIwantmatched";
// var myRegexp = /phrase=(.*)/;
// var match = myRegexp.exec(phrase);
// alert(match[1]);





$('.hbtn').not($('.hbtn-x')).on('click', function (e) {

});

