function interact(input) {
    if (input.match(/licz/ig)) {
        return licz(input.substr(input.lastIndexOf(' ')+1));
    } else if (input.match(/pisz/ig)) {
        var tel = input.replace(/^([a-z\s]{1,})\s([a-z0-9\+\@]{4,})([,\szże]{4,5})([\S|\s|\d|\D]{1,})/ig,'$2');
        var message = input.replace(/^([a-z\s]{1,})\s([a-z0-9\+\@]{4,})([,\szże]{4,5})([\S|\s|\d|\D]{1,})/ig,'$4');
        return napiszSMS(tel,message);
    } else if (input.match(/dzwo[n|ń]/ig)) {
        var tel = input.substr(userInput.lastIndexOf(' '));
        return zadzwon(tel);
    } else if (input.match(/szukaj/ig)) {
        return search();
    } else if (input.match(/^otw[o|ó]rz/ig)) {
        return otworzLink();
    } else if (input.match(/^zapami[e|ę]taj/ig)) {
        localStorage['aida-rememberedList'] += input.substr(input.indexOf(' '))+'#';
        return 'Zapamiętano '+input.substr(input.indexOf(' '))
    } else if (input == 'zapomnij wszystko') {
        return usunWszystkieZapamietane();
    } else if (input.match(/^zapomnij/ig)) {
        return zapomnij(input.substr(input.indexOf(' ')));
    } else if (input.match(/kurw/ig) || input.match(/chuj/ig) || input.match(/suk/ig) || input.match(/pizda/ig) || input.match(/cipa/ig)) {
        return 'Ej! Nie używaj takich słów!';
    } else if (input.match(/^kolory/ig)) {
        zmianaKoloru();
        return 'Zmieniono kolor czatu';
    } else if (input.match(/t[l|ł]umacz/ig)) {
        if (input.indexOf(' ') != -1) var toTranslate = input.trim().substr(input.indexOf(' ')).trim();
        else return puste;
        var translated = ''
        $.ajax({
            url:'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl='+localStorage['aida-currentLang']+'&dt=t&q='+toTranslate,
            success: function(r){
                console.log(r[2])
                translated = r[0][0][0];
            },
            async: false
        });
        return translated;
    } else if (input.match(/^aida:\/\//ig)) {     
        // ------------------------------ Aida dev messages ---------------------------------
        if (input == 'aida://author') return 'Piotr Sokołowski';
        if (input == 'aida://beta') {
            setTimeout(function(){
                location.href = '_beta';
            }, 1500);
            return 'Przechodzę do wersji beta';
        };
        if (input == 'aida://changelog') return changelog.join('<br><br>');
        if (input.match(/^aida:\/\/debug/ig)) {
            if (input== 'aida://debug') {
                for (var i in window) {
                    if (typeof window[i] == 'function'){
                        try {
                            window[i].name;
                        } catch (error) {
                            return error.message;
                        }
                    }
                }
            } else {
                try {
                    eval(input.substr(input.indexOf(' ')).trim());
                } catch (error) {
                    return error.message;
                }
            }
            return 'Nie znaleziono błędów'
        }
        if (input.match(/^aida:\/\/lang/ig)) {
            setTimeout(function(){
                localStorage['aida-currentLang'] = input.substr(input.indexOf(' ')).trim();
                checkLang();
            }, 1500);
            return 'Zmieniam język';
        };
        if (input == 'aida://restart' || input == 'aida://reset' || input == 'aida://reboot') {
            setTimeout(function(){
                location.reload(true);
            }, 1500);
            return 'Uruchamiam ponownie...';
        };
        if (input == 'aida://clear-data' || input == 'aida://factory-reset') {
            setTimeout(function(){
                localStorage.clear();
                location.reload(true);
            }, 1500);
            return 'Przywracam do ustawień początkowych...';
        }
        if (input == 'aida://system') return checkOS();
        if (input == 'aida://version') return version;
    } else {
        $('#newInfo').show();
        $('#newInfo').focus();
        return 'Nie wiem jak mogę na to odpowiedzieć... Możesz mi podać przykład?';
    }
}

// Bateria
setInterval(function(){
    navigator.getBattery().then(function (battery) {
        function updateAllBatteryInfo() {
            updateChargeLevel();
        }
        updateAllBatteryInfo();

        battery.addEventListener('chargingchange', function () {
            updateChargeLevel();
        });
        function updateChargeLevel() {
            if (battery.charging) {
                var hBat = Math.floor(battery.chargingTime/3600);
                var mBat = Math.floor((battery.chargingTime%3600)/60);
                var sBat = Math.floor((battery.chargingTime%3600)%60);

                if (hBat < 10) hBat = '0' + hBat;
                if (mBat < 10) mBat = '0' + mBat;
                if (sBat < 10) sBat = '0' + sBat;
                if (isNaN(sBat)) {
                    hBat = '00';
                    mBat = '00';
                    sBat = '00';
                }

                var status = 'ładuje';
                var time = hBat + ':' + mBat + ':' + sBat;
            } else {
                var hBat = Math.floor(battery.dischargingTime/3600);
                var mBat = Math.floor((battery.dischargingTime%3600)/60);
                var sBat = Math.floor((battery.dischargingTime%3600)%60);

                if (hBat < 10) hBat = '0' + hBat;
                if (mBat < 10) mBat = '0' + mBat;
                if (sBat < 10) sBat = '0' + sBat;
                if (isNaN(sBat)) {
                    hBat = '00';
                    mBat = '00';
                    sBat = '00';
                };

                var status = 'nie ładuje';
                var time = hBat + ':' + mBat + ':' + sBat;
            }
            if (time == '00:00:00') $('span.assistant.battery').text(Math.round(battery.level * 100) + '%, ' + status);
            else $('span.assistant.battery').text(Math.round(battery.level * 100) + '%, ' + status + ', pozostało ' + time);
        }
    });
},2000);

function godzina(){
    var now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    
    if (hours < 10) hours = '0' + hours;
    if (min < 10) min = '0' + min;

    return hours + ':' + min;
};

function dzien(){
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    return day + '.' + month + '.' + year;
};

function zmianaKoloru() {
    var colors = bot.input.substr(bot.input.indexOf(' ')+1);
    var color = colors.split(' ');
    if (color[0] == 'default') color[0] = 'white';
    if (color[1] == 'default') color[1] = '#0091fe';
    localStorage['aida-color'] = color[0];
    localStorage['aida-bgColor'] = color[1];
    $('#messages span.client').css({
        'color': localStorage['aida-color'],
        'background-color': localStorage['aida-bgColor'],
        'border-color': localStorage['aida-bgColor']
    });
}

function licz(i){
    var result = i.replace(/([0-9]{1,})(\^)([0-9]{1,})/ig,'Math.pow($1,$3)')
    return result + '=' + eval(result).toString();
};

function checkOS() {
    var MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;
    var OSName = 'Nieznany';
    if (MobileUserAgent.match(/iPad/i) || MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i)) {
        OSName='iOS';
    } else if (MobileUserAgent.match(/Android/i)) {
        OSName='Android';
    } else {
        if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
        if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="macOS";
        if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
        if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
        if (window.navigator.userAgent.indexOf("asystent-app")   != -1) OSName="Aplikacja";
    }
    return OSName;
};

function search(){
    var query = bot.input.substr(bot.input.indexOf(' ')+1+1,(bot.input.lastIndexOf(' w ')) - bot.input.indexOf(' ')+1 - 1);
    if (bot.input.match(/google/)) {
        setTimeout(function(){
            open('https://www.google.com/search?q='+encodeURI(query));
        },1500);
        return 'Szukam w Google';
    } else if (bot.input.match(/youtube/ig)) {
        setTimeout(function(){
            open('https://www.youtube.com/results?search_query='+encodeURI(query));
        },1500);
        return 'Szukam w Youtube';
    } else if (bot.input.match(/wolfram/ig)) {
        setTimeout(function(){
            open('https://www.wolframalpha.com/input/?i='+encodeURI(query));
        },1500);
        return 'Szukam w Wolfram|Alpha';
    } else if (bot.input.match(/wiki/ig)) {
        setTimeout(function(){
            open('https://pl.wikipedia.org/w/index.php?search='+encodeURI(query));
        },1500);
        return 'Szukam w Wikipedii';
    } else if (bot.input.match(/github/ig)) {
        setTimeout(function(){
            open('https://github.com/search?utf8=✓&q='+encodeURI(query));
        },1500);
        return 'Szukam na Githubie';
    } else if (bot.input.match(/sklep/ig) && bot.input.match(/play/ig)) {
        setTimeout(function(){
            open('https://play.google.com/store/search?q='+encodeURI(query));
        },1500);
        return 'Szukam w sklepie Google Play';
    } else {
        setTimeout(function(){
            open('https://www.google.com/search?q='+encodeURI(query));
        },1500);
        return 'Nie rozpoznaję takiej wyszukiwarki. Przechodzę do Google';
    }
};

function napiszSMS(t,m){
    if (t == bot.input || m == bot.input) {
        return 'Nie podałeś treści wiadomości lub numeru telefonu, albo zrobiłeś błąd w składnii';
    } else {
        if (t.match(/@/ig)){
            console.log('mail');
            var link = 'mailto:'+t+'?body='+encodeURI(m);
            return '"'+m+'" do '+t;
        } else {
            console.log('sms');
            var link = 'sms:'+t;

            if (checkOS() == 'iOS') {
                link += '&body='+encodeURI(m);
                setTimeout(function(){
                    open(link);
                },1500);
                return '"'+m+'" do '+t;
            } else if (checkOS() == 'Android') {
                link += '?body='+encodeURI(m);
                setTimeout(function(){
                    location.href = link;
                },1500);
                return '"'+m+'" do '+t;
            } else {
                console.log('error');
                return 'Wiadomość nie może być wysłana z tego urządzenia...';
            }
        }
    }
}

function zadzwon(t) {
    if (t.match(/+[0-9]{4,}/ig) || t.match(/[0-9]{3}/ig)) {
        var link = 'tel:'+t;

        if (checkOS() == 'iOS' || checkOS() == 'Android') {
            setTimeout(function(){
                location.href = link;
            },1500);
            return 'Wybieram numer '+t;
        } else {
            return 'Nie możesz zadzwonić z tego urządzenia...';
        }
    } else {
        return `Nie podał${end} numeru telefonu`;
    }
}

function pokazZapamietane(){
    if (localStorage['aida-rememberedList'].length != 0) {
        var lista = localStorage['aida-rememberedList'].split('#');
        return lista.join(',<br>').substr(0,lista.join(',<br>').length-5);
    } else {
        return 'Brak zapamiętanych informacji...'
    }
};

function zapomnij(doUsuniecia) {
    var x = confirm('Czy na pewno chcesz usunąć '+doUsuniecia+'?');
    var lista = localStorage['aida-rememberedList'].split('#');
    if (x) {
        for (k in lista) {
            if (lista[k] == doUsuniecia) {
                lista.splice(k,1);
            }
        }
        localStorage['aida-rememberedList'] = lista.join('#');
        return 'Usunięto ' + doUsuniecia;
    } else {
        return 'Niczego nie usunięto'
    }
};

function usunWszystkieZapamietane() {
    var x = confirm('Czy na pewno chcesz wszystko usunąć?');
    if (x) {
        localStorage['aida-rememberedList'] = '';
        return 'Usunięto wszystkie zapamiętane informacje';
    } else {
        return 'Niczego nie usunięto'
    }
};

function otworzLink() {
    var link = bot.input.substr(bot.input.indexOf(' ')+1);
    if (link.match(/facebook/ig)) {
        setTimeout(function(){
            open('https://facebook.com/');
        },1500);
        return 'Otwieram Facebooka';
    } else if (link.match(/messenger/ig)) {
        setTimeout(function(){
            open('https://messenger.com/');
        },1500);
        return 'Otwieram Messengera';
    } else if (link.match(/onedrive/ig) || link.match(/łandrajw/ig)) {
        setTimeout(function(){
            open('https://onedrive.live.com/');
        },1500);
        return 'Otwieram Onedrive';
    } else if (link.match(/t[l|ł]umacz/ig)) {
        setTimeout(function(){
            open('https://onedrive.live.com/');
        },1500);
        return 'Otwieram Onedrive';
    } else if (link.match(/mapy/ig) || (link.match(/mapy/ig) && link.match(/google/ig))) {
        setTimeout(function(){
            open('https://maps.google.com/');
        },1500);
        return 'Otwieram Mapy Google';
    } else if (link.match(/dysk/ig) || link.match(/drive/ig)) {
        setTimeout(function(){
            open('https://drive.google.com/');
        },1500);
        return 'Otwieram Dysk Google';
    } else if (link.match(/google/ig)) {
        setTimeout(function(){
            open('https://google.com/');
        },1500);
        return 'Otwieram Google';
    } else if (link.match(/youtube/ig)) {
        setTimeout(function(){
            open('https://youtube.com/');
        },1500);
        return 'Otwieram Youtube';
    } else if (link.match(/plan/ig) && link.match(/zsem/ig)) {                      // ZSEM
        setTimeout(function(){                                                      // ZSEM
            open('http://zsem.edu.pl/plany/');                                      // ZSEM
        },1500);                                                                    // ZSEM
        return 'Otwieram plan lekcji ZSEM';                                         // ZSEM
    } else if (link.match(/zast[e|ę]pstwa/ig) && link.match(/zsem/ig)) {            // ZSEM
        setTimeout(function(){                                                      // ZSEM
            open('http://zsem.edu.pl/zastepstwa/');                                 // ZSEM
        },1500);                                                                    // ZSEM
        return 'Otwieram zastępstwa ZSEM';                                          // ZSEM
    } else if (link.match(/^(http|https|ftp):\/\/[a-z.]{1,}\.[a-z]{1,}$/ig)) {
        setTimeout(function(){
            open(link);
        },1500);
        return `Otwieram ${link}`;
    } else if (link.match(/^[a-z.]{1,}\.[a-z]{1,}$/ig)) {
        setTimeout(function(){
            open('http://'+link);
        },1500);
        return `Otwieram http://${link}`;
    } else {
        setTimeout(function(){
            open(`https://www.google.com/search?q=${encodeURI(link)}`);
        },1500);
        return `Szukam ${link} w Google`;
    }
};

function updateChat(who, what) {
    $('#messages').append('<div class="message '+who+'"><span class="'+who+'"></span></div>');
    if ($(`#messages span.client:last`).text().match(/pami[e|ę]ta/ig) || $('#messages span.client:last').text().match(/^aida:\/\//ig)) {
        $(`#messages span.${who}:last`).html(what);
    } else if (jQuery.type(bot.response(bot.input)) == 'array' && bot.response(bot.input)[1].match(/html/ig)) {
        $(`#messages span.${who}:last`).html(what);
    } else {
        $(`#messages span.${who}:last`).text(what);
    }
    $('#messages').stop().animate({
        scrollTop: $('#messages').prop('scrollHeight')
    });
    if (who == 'assistant' && !what.match(/<img/ig)) responsiveVoice.speak(what.replace(/<br>/ig,' ').replace(/(<a)([\s\S]{1,})(>)([\s\S]{1,})(<\/a>)/ig,'$4'),'Polish Female');
    $('#messages span.client:last').css({
        'color': localStorage['aida-color'],
        'background-color': localStorage['aida-bgColor'],
        'border-color': localStorage['aida-bgColor']
    })
};

function sendData() {
    bot.input = $('#clientInput').val();
    updateChat('client',$('#clientInput').val());
    $('#clientInput').val('');
    updateChat('assistant','');
    $('#messages span.assistant:last').addClass('thinking');
    $('.thinking').html('<img class="dots" src="/res/dots.gif" alt="Aida odpisuje...">')
    setTimeout(function(){
        $('#messages div.assistant:last').remove();
        if (bot.response(bot.input) != undefined) {
            if (jQuery.type(bot.response(bot.input)) == 'array') {
                if (bot.response(bot.input)[1] != 'html') {
                    updateChat('assistant',bot.response(bot.input)[0]);
                    $('#messages span.assistant:last').addClass(bot.response(bot.input)[1]);
                } else {
                    updateChat('assistant',bot.response(bot.input)[0]);
                }
            } else {
                updateChat('assistant',bot.response(bot.input));
            }
        } else if (bot.learning(bot.input) != undefined) {
            updateChat('assistant',bot.learning(bot.input));
        } else {
            updateChat('assistant',bot.interaction(bot.input));
        }
    }, 1500)
}

function addInfo() {
    updateChat('client',$('#newInfo').val());
    learn[bot.input] = $('#newInfo').val();
    updateChat('assistant',`Na ${bot.input} będę odpowiadać ${learn[bot.input]}`);
    $.ajax({url: `/dev/nauka.php?q=${bot.input}&a=${$('#newInfo').val()}`});
    $('#newInfo').val('');
    $('#newInfo').hide();
    $('#clientInput').focus();
};

function checkName() {
    if (localStorage['aida-name'] == undefined) {
        updateChat('assistant','Witaj! Jak masz na imię?')
        $('#name').show();
        $('#name').focus();
    } else {
        if (localStorage['aida-name'] == 'Towarzyszu') {
            updateChat('assistant',`Witajcie ${localStorage['aida-name']}! Dobrze, że wróciliście!`)
        } else {
            updateChat('assistant',`Cześć ${localStorage['aida-name']}! Miło, że wrócił${end}!`);
        }
    }
};

function saveName() {
    localStorage.setItem('aida-name',$('#name').val());
    updateChat('client',localStorage['aida-name']);
    $.ajax({url: '/dev/licznik.php'});
    $('#name').hide();
    $('#name').val('');
    $('#clientInput').focus();
    updateChat('assistant',`Cześć ${localStorage['aida-name']}! Miło Cię poznać!`);
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function checkLang() {
    if (localStorage['aida-currentLang'] == undefined) location.replace('/');
    if (localStorage['aida-currentLang'] != location.href.substr(-10,2)) location.replace(`/${localStorage['aida-currentLang']}/?online`);
}

$(document).ready(checkLang());
$(document).ready(checkName());