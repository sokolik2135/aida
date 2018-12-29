setInterval(function(){
    database = {
        // wiadomość: odpowiedź
    
        // a
        'ayo ladies and gentleman': 'Wo-oh-oh!',
        'ayo ladies and gentleman!': 'Wo-oh-oh!',
        'ayo, ladies and gentleman': 'Wo-oh-oh!',
        'ayo, ladies and gentleman!': 'Wo-oh-oh!',
    
        // ą
    
        // b
        'bateria': ['Pobieranie informacji o baterii...','battery'],
        'bez urazy': 'Nie możesz mnie urazić, jestem programem',
    
        // c
        'chce byc betatesterem': ['Wpisz <code>aida://beta</code> i możesz testować wersję beta, jeśli jest dostępna','proud html'],
        'chce być betatesterem': ['Wpisz <code>aida://beta</code> i możesz testować wersję beta, jeśli jest dostępna','proud html'],
        'chcę byc betatesterem': ['Wpisz <code>aida://beta</code> i możesz testować wersję beta, jeśli jest dostępna','proud html'],
        'chcę być betatesterem': ['Wpisz <code>aida://beta</code> i możesz testować wersję beta, jeśli jest dostępna','proud html'],
        'chłopy': 'Szafraniec',
        'cmok': ['','kiss'],
        'co nowego': [changelog[changelog.length-1],'html'],
        'co pamietasz': pokazZapamietane(),
        'co pamietasz?': pokazZapamietane(),
        'co pamiętasz': pokazZapamietane(),
        'co pamiętasz?': pokazZapamietane(),
        'co potrafisz': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz?': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz robic': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz robic?': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz robić': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz robić?': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co robisz': 'A nic takiego, a Ty?',
        'co robisz?': 'A nic takiego, a Ty?',
        'co tam': ['Wszystko dobrze','proud'],
        'co tam?': ['Wszystko dobrze','proud'],
        'czemu mój kod nie działa?': 'Bo jesteś beztalenciem, '+localStorage['aida-name']+'.',
        'cześć': hello[0],
        'czesć': hello[0],
        'cześc': hello[0],
        'czesc': hello[0],
    
        // ć
    
        // d
        'data': dzien(),
        'dobranoc': ['Dobranoc Misiu','kiss'],
        'dobra noc': ['Dobranoc Misiu','kiss'],
        'dzien': dzien(),
        'dzień': dzien(),
        'dzień dobry': hello[0],
        'dzis': dzien(),
        'dzisiaj': dzien(),
        'dziś': dzien(),
    
        // e
        'eee': 'Szafraniec',
    
        // ę
    
        // f
    
        // g
        'godzina': godzina(),
    
        // h
        'hah': ['','laugh'],
        'haha': ['','laugh'],
        'hotel': ['<a href="http://trivago.pl" target="_blank"><img src="res/trivago.png" alt="trivago" style="width:100%;height:initial;border-radius:16px;"></a>','html'],
        'hotel?': ['<a href="http://trivago.pl" target="_blank"><img src="res/trivago.png" alt="trivago" style="width:100%;height:initial;border-radius:16px;"></a>','html'],
        'hotel ?': ['<a href="http://trivago.pl" target="_blank"><img src="res/trivago.png" alt="trivago" style="width:100%;height:initial;border-radius:16px;"></a>','html'],
    
        // i
    
        // j
        'jak robi lis': ['Ring-ding-ding-ding-dingeringeding!<br>Wa-pa-pa-pa-pa-pa-pow!<br>Lub coś takiego','fox html'],
        'jak robi lis?': ['Ring-ding-ding-ding-dingeringeding!<br>Wa-pa-pa-pa-pa-pa-pow!<br>Lub coś takiego','fox html'],
        'jaki jest dzis dzien': 'Dziś jest '+dzien(),
        'jaki jest dzis dzien?': 'Dziś jest '+dzien(),
        'jaki jest dzis dzień': 'Dziś jest '+dzien(),
        'jaki jest dzis dzień?': 'Dziś jest '+dzien(),
        'jaki jest dziś dzien': 'Dziś jest '+dzien(),
        'jaki jest dziś dzien?': 'Dziś jest '+dzien(),
        'jaki jest dziś dzień': 'Dziś jest '+dzien(),
        'jaki jest dziś dzień?': 'Dziś jest '+dzien(),
    
        // k
        'kacper szczerba': 'On bigos głową miesza',
        'kawal': jokes[0],
        'kawał': jokes[0],
        'kiedy cie stworzono': 'Powstałam pod koniec 2018 roku',
        'kiedy cie stworzono?': 'Powstałam pod koniec 2018 roku',
        'kiedy cię stworzono': 'Powstałam pod koniec 2018 roku',
        'kiedy cię stworzono?': 'Powstałam pod koniec 2018 roku',
        'ktora godzina': 'Jest '+godzina(),
        'ktora godzina?': 'Jest '+godzina(),
        'która godzina': 'Jest '+godzina(),
        'która godzina?': 'Jest '+godzina(),
        'ktora jest': 'Jest '+godzina(),
        'ktora jest?': 'Jest '+godzina(),
        'która jest': 'Jest '+godzina(),
        'która jest?': 'Jest '+godzina(),
        'kwa': ['Tak robi kaczka','duck'],
        'kwakwa': ['Tak robi kaczka','duck'],
        'kwakwa5!': ['Pan Niemczak','duck'],
    
        // l
    
        // ł
    
        // m
    
        // n
        'nie wiem': 'Szkoda',
        'no': 'No nie wiem kurde no',
        'noo': 'No nie wiem kurde no',
        'nowości': [changelog[changelog.length-1],'html'],
    
        // ń
    
        // o
        'ok': 'Dzięki',
        'opowiedz dowcip': jokes[0],
        'opowiedz kawal': jokes[0],
        'opowiedz kawał': jokes[0],
        'opowiedz zart': jokes[0],
        'opowiedz żart': jokes[0],
    
        // ó
    
        // p
    
        // q
    
        // r
    
        // s
        'sappery': ['<a target="_blank" href="https://www.youtube.com/channel/UC-uVVogpGg8s31RYhnfhX5Q">Kacper Szczerba</a>','html'],
        'siema': hello[0],
    
        // ś
    
        // t
    
        // u
    
        // v
    
        // w
        'witaj': hello[0],
        'witam': hello[0],
    
        // x
    
        // y
    
        // z
        'zart': jokes[0],
        'zepsulas sie': ['Wybacz, dalej jestem w fazie rozwoju','buggy'],
        'znamy sie': ['Tak, jesteś '+localStorage['aida-name']+', a ja Aida','proud'],
        'znamy sie?': ['Tak, jesteś '+localStorage['aida-name']+', a ja Aida','proud'],
        'znamy się': ['Tak, jesteś '+localStorage['aida-name']+', a ja Aida','proud'],
        'znamy się?': ['Tak, jesteś '+localStorage['aida-name']+', a ja Aida','proud'],
        'zle sie czuje': ['Dlaczego?','sad'],
        'zle sie czuję': ['Dlaczego?','sad'],
        'zle się czuje': ['Dlaczego?','sad'],
        'zle się czuję': ['Dlaczego?','sad'],
    
        // ź
        'źle sie czuje': ['Dlaczego?','sad'],
        'źle sie czuję': ['Dlaczego?','sad'],
        'źle się czuje': ['Dlaczego?','sad'],
        'źle się czuję': ['Dlaczego?','sad'],
    
        // ż
        'żart': jokes[0],
        '': puste
    }
},500);