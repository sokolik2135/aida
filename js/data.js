setInterval(function(){
    database = {
        // wiadomość: odpowiedź
    
        // a
        'admin123#': ['Elektryk jak nic','laugh'],
        'ayo ladies and gentleman': 'Wo-oh-oh!',
    
        // ą
    
        // b
        'bateria': battery,
        'bez urazy': 'Nie możesz mnie urazić, jestem programem',
    
        // c
        'chce byc betatesterem': ['Wpisz <code>aida://beta</code> i możesz testować wersję beta, jeśli jest dostępna','proud html'],
        'chlopy': 'Szafraniec',
        'cmok': ['','kiss'],
        'co bedzie sie dzialo na pikniku': 'Przyjdź i przekonaj się sam',
        'co nowego': [changelog[changelog.length-1],'html'],
        'co pamietasz': pokazZapamietane(),
        'co potrafisz': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co potrafisz robic': ['Umiem:<br>'+przyklady.join(',<br>'),'html'],
        'co robisz': 'A nic takiego, a Ty?',
        'co tam': [howRU[0],'proud'],
        'czemu moj kod nie dziala?': 'Bo jesteś beztalenciem, '+localStorage['aida-name']+'.',
        'czesc': hello[0],
    
        // ć
    
        // d
        'data': dzien(),
        'dobranoc': ['Dobranoc Misiu','kiss'],
        'dobra noc': ['Dobranoc Misiu','kiss'],
        'dzieki': [przepraszamDziekuje[0],'proud'],
        'dziekuje': [przepraszamDziekuje[0],'proud'],
        'dzien': dzien(),
        'dzień dobry': hello[0],
        'dzis': dzien(),
        'dzisiaj': dzien(),
    
        // e
        'eee': 'Szafraniec',
    
        // ę
    
        // f
    
        // g
        'godzina': godzina(),
    
        // h
        'hah': ['','laugh'],
        'haha': ['','laugh'],
        'hotel': ['<a href="http://trivago.pl" target="_blank"><img src="/res/trivago.png" alt="trivago" style="width:100%;height:initial;border-radius:16px;"></a>','html'],
        
        // i
    
        // j
        'jak robi lis': ['Ring-ding-ding-ding-dingeringeding!<br>Wa-pa-pa-pa-pa-pa-pow!<br>Lub coś takiego','fox html'],
        'jak tam':[howRU[0],'proud'],
        'jaki jest dzis dzien': 'Dziś jest '+dzien(),
    
        // k
        'kacper szczerba': 'On bigos głową miesza',
        'kawal': jokes[0],
        'kawał': jokes[0],
        'kiedy cie stworzono': 'Powstałam pod koniec 2018 roku',
        'ktora godzina': 'Jest '+godzina(),
        'ktora jest': 'Jest '+godzina(),
        'ktora jest godzina': 'Jest '+godzina(),
        'kwa': ['Tak robi kaczka','duck'],
        'kwakwa': ['Tak robi kaczka','duck'],
    
        // l
    
        // m
    
        // n
        'nie wiem': 'Szkoda',
        'no': 'No nie wiem kurde no',
        'no cos': ['Coś','laugh'],
        'no cos ty': 'No co?',
        'noo': 'No nie wiem kurde no',
        'nowosci': [changelog[changelog.length-1],'html'],
    
        // o
        'ok': 'Dzięki',
        'opowiedz dowcip': jokes[0],
        'opowiedz kawal': jokes[0],
        'opowiedz zart': jokes[0],
    
        // p
        'powiedz cos': ['Ale co?','laugh'],
        'poziom baterii': battery,
    
        // q
    
        // r
    
        // s
        'sappery': ['<a target="_blank" href="https://www.youtube.com/channel/UC-uVVogpGg8s31RYhnfhX5Q">Kacper Szczerba</a>','html'],
        'siema': hello[0],
        'sprawdz poziom baterii': battery,
    
        // t
        'test': 'test#new#test2',
    
        // u
    
        // v
    
        // w
        'witaj': hello[0],
        'witam': hello[0],
    
        // x
    
        // y
    
        // z
        'zapelnij': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#new#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'zart': jokes[0],
        'zepsulas sie': ['Wybacz, dalej jestem w fazie rozwoju','buggy'],
        'znamy sie': ['Tak, jesteś '+localStorage['aida-name']+', a ja Aida','proud'],
        'zle sie czuje': ['Dlaczego?','sad'],

        '': puste
    }
},500);