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
        //console.log(outer);
        klon = $(this).clone().css('margin-right', '20px');

        $('.class-helper .class-helper__inner').css('display', 'flex').empty().prepend('<h4>HTML:</h4><pre></pre><h4>CSS:</h4>').prepend(klon);
        $('.class-helper .class-helper__inner pre').text(outer);
        $('.class-helper').slideDown();
    });
}

// Change Button Style
$(function () {
    $('.changeStyle').on('click', function (e) {
        e.preventDefault();
        $('.hbtn').not($('.hbtn-x')).toggleClass('hpill');
        $(this).toggleClass('hpill');
        $('.class-helper').slideUp();
        $(this).text(function(i, text){
            return text === "RECTANGLE" ? "PILL" : "RECTANGLE";
        });
    });
});

//changes background to image
$(function () {
    $('.changeBackground').on('click', function (e) {
        e.preventDefault();
        if ($('.body-overlay').hasClass('hidden')) {

            var imagesArray = [
                'url("demo/backgrounds/1.jpg")',
                'url("demo/backgrounds/2.jpg")',
                'url("demo/backgrounds/3.jpg")',
                'url("demo/backgrounds/4.jpg")',
                'url("demo/backgrounds/5.jpg")'
            ];
            var randBackground = Math.floor(Math.random() * (imagesArray.length));
            $('.body-overlay').removeClass('hidden').css('background-image', imagesArray[randBackground]);

            $('.class-helper').slideUp();
        } else {
            $('.body-overlay').addClass('hidden');

        }
    });
});

// Border change
$(function () {
    button = $('.hbtn').not($('.hbtn-x'));
    $('.changeBorder').on('click', function (e) {
        e.preventDefault();
        console.log(button.css('border-width'))
        if (button.css('border-width') == '1px') {
            button.removeClass('hbor1 hbor3 hbor4 hbor5')
            button.addClass('hbor2')
        }
        else if (button.css('border-width') == '2px') {
            button.removeClass('hbor1 hbor2 hbor4 hbor5')
            button.addClass('hbor3')
        }
        else if (button.css('border-width') == '3px') {
            button.removeClass('hbor1 hbor2 hbor3 hbor5')
            button.addClass('hbor4')
        }
        else if (button.css('border-width') == '4px') {
            button.removeClass('hbor1 hbor3 hbor3 hbor4')
            button.addClass('hbor5')
        }
        else if (button.css('border-width') == '5px') {
            button.removeClass('hbor2 hbor3 hbor4 hbor5')
            button.addClass('hbor1')
        }
    });
});



// Padding change
$(function () {

    button = $('.hbtn').not($('.hbtn-x'));

    $('.changePadding').on('click', function (e) {
        e.preventDefault();


        //console.log($('.hbtn').hasClass('hpad1', 'hpad2', 'hpad3', 'hpad4', 'hpad5'));
        //console.log(button.css('border-width'))
        if (button.is('.hpad1, .hpad2, .hpad3, .hpad4, .hpad5') == false) {

            button.addClass('hpad2');
        }
        else if (button.hasClass('hpad2')) {
            button.removeClass('hpad2');
            button.addClass('hpad3');
        }
        else if (button.hasClass('hpad3')) {
            button.removeClass('hpad3');
            button.addClass('hpad4');
        }
        else if (button.hasClass('hpad4')) {
            button.removeClass('hpad4');
            button.addClass('hpad5');
        }
        else if (button.hasClass('hpad5')) {
            button.removeClass('hpad5');
            button.addClass('hpad2');
        }
    });
});

// function hasBorders(myClass, myClass2) {
//     button.each(function () {
//         borders = /border/.test($(this).attr("class"));
//         if (borders == false) {
//             $(this).addClass(myClass)
//         } else {
//             $(this).addClass(myClass2)
//         }
//     });
// }

$(function () {
   var imagesArray = [
                'url("demo/backgrounds/1.jpg")',
                'url("demo/backgrounds/2.jpg")',
                'url("demo/backgrounds/3.jpg")',
                'url("demo/backgrounds/4.jpg")',
                'url("demo/backgrounds/5.jpg")'
            ];
            var randBackground = Math.floor(Math.random() * (imagesArray.length));
            $('.body-overlay').removeClass('hidden').css('background-image', imagesArray[randBackground]);
});

// $(function () {
//     $('.changeColor').on('click', function (e) {
//         e.preventDefault();
//         $('.hbtn').addClass
//     });
// });

// Add icons on click.
$(function () {
    $('.changeIcon').on('click', function (e) {
        e.preventDefault();

        var iconArray = new Array("glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "remove", "close", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "photo", "image", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "bar-chart", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook-f", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "navicon", "reorder", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-desc", "sort-up", "sort-asc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "mail-reply-all", "reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "gratipay", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o", "space-shuttle", "slack", "envelope-square", "wordpress", "openid", "institution", "bank", "university", "mortar-board", "graduation-cap", "yahoo", "google", "reddit", "reddit-square", "stumbleupon-circle", "stumbleupon", "delicious", "digg", "pied-piper", "pied-piper-alt", "drupal", "joomla", "language", "fax", "building", "child", "paw", "spoon", "cube", "cubes", "behance", "behance-square", "steam", "steam-square", "recycle", "automobile", "car", "cab", "taxi", "tree", "spotify", "deviantart", "soundcloud", "database", "file-pdf-o", "file-word-o", "file-excel-o", "file-powerpoint-o", "file-photo-o", "file-picture-o", "file-image-o", "file-zip-o", "file-archive-o", "file-sound-o", "file-audio-o", "file-movie-o", "file-video-o", "file-code-o", "vine", "codepen", "jsfiddle", "life-bouy", "life-buoy", "life-saver", "support", "life-ring", "circle-o-notch", "ra", "rebel", "ge", "empire", "git-square", "git", "hacker-news", "tencent-weibo", "qq", "wechat", "weixin", "send", "paper-plane", "send-o", "paper-plane-o", "history", "genderless", "circle-thin", "header", "paragraph", "sliders", "share-alt", "share-alt-square", "bomb", "soccer-ball-o", "futbol-o", "tty", "binoculars", "plug", "slideshare", "twitch", "yelp", "newspaper-o", "wifi", "calculator", "paypal", "google-wallet", "cc-visa", "cc-mastercard", "cc-discover", "cc-amex", "cc-paypal", "cc-stripe", "bell-slash", "bell-slash-o", "trash", "copyright", "at", "eyedropper", "paint-brush", "birthday-cake", "area-chart", "pie-chart", "line-chart", "lastfm", "lastfm-square", "toggle-off", "toggle-on", "bicycle", "bus", "ioxhost", "angellist", "cc", "shekel", "sheqel", "ils", "meanpath", "buysellads", "connectdevelop", "dashcube", "forumbee", "leanpub", "sellsy", "shirtsinbulk", "simplybuilt", "skyatlas", "cart-plus", "cart-arrow-down", "diamond", "ship", "user-secret", "motorcycle", "street-view", "heartbeat", "venus", "mars", "mercury", "transgender", "transgender-alt", "venus-double", "mars-double", "venus-mars", "mars-stroke", "mars-stroke-v", "mars-stroke-h", "neuter", "facebook-official", "pinterest-p", "whatsapp", "server", "user-plus", "user-times", "hotel", "bed", "viacoin", "train", "subway", "medium");

        $('.hbtn').not($('.hbtn-x')).each(function () {

            if ($(this).has('i').length == false ) {
                var randIcon = Math.floor(Math.random()*(iconArray.length));
                $(this).prepend('<i class="fa fa-' + iconArray[randIcon] + '" aria-hidden="true"></i>');
            } else {
                $('i', this).remove();
            }
        });

        $('.class-helper').slideUp();

    });
});

$(function () {
    $('.close-icon').on('click', function () {
        $('.class-helper').slideUp();
    });
});


// Declare selector variable and stylesheet constant (using 2nd stylesheet from the array)
myClass = '';
const myStylesheet = ($.makeArray(document.styleSheets[2].cssRules)).filter(({ selectorText }) => selectorText && selectorText.includes(myClass));

$(function () {
    $('.hbtn').on('click', function () {
        thisButton = $(this);
        classes = $(this).attr('class').split(' ');
        $('.class-helper .class-helper__inner2').css('display', 'flex').empty().prepend('<pre></pre>')
        classes.forEach(function(item1, index, array) {
            item1 = '.' + item1;
            myClass = item1;
            //console.log(thisButton);
            showCss(item1, myStylesheet);
        });
    });
});


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
            var selectorRegex = new RegExp(selector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "(?:[:\\s].*)?$"); //regex rule to match the given class and all variations (:before, :hover etc)
            //console.log(selectorRegex);
            var matchingSelector = mySelector.match(selectorRegex); // Find those selectors that match 'selector' (contains it in some form)
            var finalSelector = '';
            // If mySelector matches:

            // console.log(item);
            // console.log(matchingSelector);
            // console.log(selectorRegex);

            if (matchingSelector !== null) {
                //If mySelector contains commas, split it into an array
                selectorLoopResult = ''; // the ultimate selector used for final result

                //console.log(mySelector);
                //console.log(thisButton);

                // If it's not a pill -> skip selectors with "pill" in them
                if (mySelector.match(/hpill/)) {
                    if (!thisButton.hasClass('hpill')) {
                        return;
                    }
                }

                if (mySelector.match(/,/)) {  //if mySelector has commas:
                     mySelectorArray = mySelector.split(',');  //split into array where commas separate items
                     mySelectorArray.forEach(function(itemP, indexP) {  //cycle through the array
                         regexSelector = new RegExp(selector + '.*');
                         finalSelector = itemP.match(regexSelector);
                         if (finalSelector !== null) {
                             selectorLoopResult = finalSelector[0];
                             return selectorLoopResult;
                         } else {
                             return;
                         }
                    });

                } else {
                    selectorLoopResult = matchingSelector[0];
                }

                itemCss = item.cssText;
                itemCss = itemCss.substring(itemCss.indexOf("{"));
                itemCss = itemCss.replace(/[{}]/g, '');
                theSelectorIndex = theSel.indexOf(selectorLoopResult);

                //If selector already in the array, find its corresponding CSS
                // and add to that rule instead of duplicating the same selector rule
                if (theSelectorIndex == -1) {
                    theSel.push(selectorLoopResult);
                    theCss.push(itemCss);

                } else {

                    itemCss = itemCss.substring(1);
                    newCssRule = theCss[theSelectorIndex] + itemCss;
                    theCss[theSelectorIndex] = newCssRule;
                }
            }
        });
    return [theSel, theCss];
}

function showCss(selector, stylesheet) {

    buttonStyles = getSelectorCss(selector, stylesheet);

    buttonStyles[0].forEach(function(item, index, array) {
       // $('.class-helper .class-helper__inner2 pre').append(' ');
        //console.log(item + index);
        $('.class-helper .class-helper__inner2 pre').append(buttonStyles[0][index] + ' {');
        $('.class-helper .class-helper__inner2 pre').append('<br>');
        string = buttonStyles[1][index];
        cssArray = string.split(/;/);

        cssArray = cleanArray(cssArray)

            cssArray.forEach(function(item, index, array) {

                    item+= ';';
                    $('.class-helper .class-helper__inner2 pre').append('     ' + item + '<br>');

            });
        $('.class-helper .class-helper__inner2 pre').append('} <br>');
        $('.class-helper .class-helper__inner2 pre').append(' ');
        $('.class-helper .class-helper__inner2 pre').append('<br><br>');
    });
}


//removes white space element and duplicates.
function cleanArray(array) {

    array2 = [];
    //arraySplit = [];

    if (array[array.length-1] == ' ') {
        array.pop();
    }

    while (array.length > 0) {
        cssItem = array[array.length-1];
        allIndexes = getAllIndexes(array, cssItem);

        if (allIndexes.length > 0) {

            for (var i = allIndexes.length -2; i >= 0; i--) {
                array.splice(allIndexes[i], 1);
            }

        }
        array2.push(cssItem);
        array.pop();
    }

    return array2.reverse();
}


//returns array of all indexes for a value (all duplicates)
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

$(function () {
    var distance = $('div').offset().top;
        //console.log(distance);
});

var distance = $('.options').offset().top,
    $window = $(window),
    height1 = $('.options').outerHeight();

//console.log(height1);



$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('.options').addClass('options-fixed');
        $('.body-wrap--light').css('margin-bottom', height1 +'px');
        //console.log(distance);
    }

    if ( $window.scrollTop() < distance ) {
        $('.options').removeClass('options-fixed');
        $('.body-wrap--light').css('margin-bottom','0px');
        //console.log(distance);
    }

});
