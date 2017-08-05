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

        $('.class-helper .class-helper__inner').css('display', 'flex').empty().prepend('<h4>HTML:</h4><pre></pre><h4>CSS:</h4>').prepend(klon);
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
            return text === "PILL!" ? "RECTANGLE!" : "PILL!";
        });
    });
});

$(function () {
    $('.close-icon').on('click', function () {
        $('.class-helper').slideUp();
    });
});


myClass = '';

$(function () {
    $('.hbtn').on('click', function () {
        classes = $(this).attr('class').split(' ');
        $('.class-helper .class-helper__inner2').css('display', 'flex').empty().prepend('<pre></pre>')
        classes.forEach(function(item1, index, array) {
            item1 = '.' + item1;
            myClass = item1;
            //console.log(item1);
            showCss(item1, myStylesheet);
        });
    });
});





const myStylesheet = ($.makeArray(document.styleSheets[2].cssRules)).filter(({ selectorText }) => selectorText && selectorText.includes(myClass));

console.log(myStylesheet);


function getSelectorCss(selector, stylesheet) {

    // myClass - the class of which CSS we want to grab
    // myStylesheet - Array from the selected stylesheet that matches myClass
    // item - item in the myStylesheet array
    // mySelector - selector from item
    // index - index of the item in the myStylesheet array

    theSel = [];
    theCss = [];


        stylesheet.forEach(function(item, index, array) {

            var mySelector = item.selectorText;
           // var regex1 = new RegExp(''+klasa+'[^-\\d].*');    //The old correct one!!!!
            var selectorRegex = new RegExp(selector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "(?::.*)?$"); //regex rule to match the given class and all variations (:before, :hover etc)

            var matchingSelector = mySelector.match(selectorRegex); // Find those selectors that match 'selector' (contains it in some form)
            //console.log(matchingSelector);

            var finalSelector = '';

            // If mySelector matches:
            if (matchingSelector !== null) {
                //If mySelector contains commas, split it into an array
                bish = ''; // the ultimate selector used for final result
                if (mySelector.match(/,/)) {  //if mySelector has commas:
                     mySelectorArray = mySelector.split(',');  //split into array where commas separate items
                     mySelectorArray.forEach(function(itemP, indexP) {  //cycle through the array

                         regexSelector = new RegExp(selector + '.*');
                         finalSelector = itemP.match(regexSelector);
                         if (finalSelector !== null) {
                             bish = finalSelector[0];
                             return bish;
                         } else {
                             return;
                         }
                    });
                } else {

                    bish = matchingSelector[0];
                }


                theSelector = bish;

                itemCss = item.cssText;
                itemCss = itemCss.substring(itemCss.indexOf("{"));
                itemCss = itemCss.replace(/[{}]/g, '');
                    //console.log(itemCss);




                theSelectorIndex = theSel.indexOf(theSelector);


                //If selector already in the array, find its corresponding CSS
                // and add to that rule instead of duplicating the same selector rule
                if (theSelectorIndex == -1) {
                    theSel.push(theSelector);
                    theCss.push(itemCss);

                } else {


                    itemCss = itemCss.substring(1);
                    newCssRule = theCss[theSelectorIndex] + itemCss;
                    //console.log('old CSS!!!!     ' + theCss[theSelectorIndex]);
                    //console.log('new CSS!!!!     ' + newCssRule);
                    //console.log(itemCss);
                    theCss[theSelectorIndex] = newCssRule;
                }




                //console.log('Selectors -> ' + theSel)
                //console.log('CSS -> ' + theCss)




                //console.log('=================================');
                //console.log('CSS:   ' + theSelector + ' ' + itemCss);
            }
        });
    return [theSel, theCss];
}

function showCss(selector, stylesheet) {

    //x = [];
    x = getSelectorCss(selector, stylesheet);

    //console.log(x);
    // x[0].forEach(function(item, index, array) {
    //     console.log(item, index);
    // });
    //
    // var xsorted = x[0].slice().sort();
    //
    // xsorted.forEach(function(item, index, array) {
    //     console.log(item, index);
    // });



    x[0].forEach(function(item, index, array) {
       // $('.class-helper .class-helper__inner2 pre').append(' ');
        $('.class-helper .class-helper__inner2 pre').append(x[0][index] + ' {');
        $('.class-helper .class-helper__inner2 pre').append('<br>');
        //console.log(' ');
        //console.log(x[0][index] + ' {');
        //console.log('CSS: ' + x[1][index]);
        string = x[1][index];
        //string = string.replace(/\s/g, '');
        cssArray = string.split(/;/);
        //console.log(cssArray);
            cssArray.forEach(function(item, index, array) {
                if (item != ' ') {                                  // dirty fix
                    item+= ';';
                    //console.log('     ' + item);
                    $('.class-helper .class-helper__inner2 pre').append('     ' + item + '<br>');
                }
            });
        //console.log('}');
        //console.log(' ');
        //console.log('-------------------------------');
        $('.class-helper .class-helper__inner2 pre').append('} <br>');
        $('.class-helper .class-helper__inner2 pre').append(' ');
        $('.class-helper .class-helper__inner2 pre').append('<br><br>');

    });
}

