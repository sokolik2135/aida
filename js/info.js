var version = 'v0.7.3';
var battery = ['Pobieranie informacji o baterii...','battery'];

if (localStorage['aida-name'] != undefined) {
    if (localStorage['aida-name'].substr(localStorage['aida-name'].length-1) == 'a') {
        var puste = 'Nic nie napisałaś';
        var end = 'aś';
    } else {
        var puste = 'Nic nie napisałeś';
        var end = 'eś';
    }
}

var changelog = [
    'v0.1:<br>Pierwsze wydanie',
    'v0.2:<br>Reakcje nie są czytane przez Asystenta,<br>Asystent może odpowiedzieć w więcej niż jednej wiadomości',
    'v0.2.1:<br>Drobne poprawki kosmetyczne,<br>Dodane 3 nowe suchary',
    'v0.3:<br>Obsługa głosowa na urządzeniach iOS (teoretycznie)<br>Rozpoznawanie systemu urządzenia<br>Automatyczna sugestia wyszukania słowa nieznanego Asystentowi w wyszukiwarce Google,<br>Wybieranie numeru telefonu,<br>Wysyłanie podanej wiadomości na wskazany numer',
    'v0.5 Dorota:<br>Zbyt wiele zmian jak na jeden przeskok,<br>Asystent otrzymuje imie Aida,<br>Wymuszenie aplikacji,<br>Reakcja na przekleństwa,<br>Odmiana osoby przez przypadki przy pisaniu SMS i wybieraniu telefonu,<br>Obliczenia wykonywane w wyszukiwarce Google lub Wolfram|Alpha',
    'v0.6:<br>Lepsze rozpoznawanie pytań,<br>Nowa ikona',
    'v0.6.1:<br>Drobne zmiany stylistyczne,<br>Obsługa poziomu baterii',
    'v0.6.2:<br>Obsługa daty i godziny,<br>Otwieranie stron (część także po samej nazwie),<br>Domyślną odpowiedzią jest definicja z Wikipedii',
    'v0.6.3:<br>Obsługa zapamiętywania rzeczy',
    'v0.6.4:<br>Informacja o pozostałym czasie do naładowania/rozładowania baterii,<br>Zapamiętane, data i czas są odczytywane przez Asystenta,<br>Poprawione odpowiedzi na nieznane pytania',
    'v0.6.5:<br>Dodana animacja przy starcie aplikacji,<br>Dodane nowe suchary,<br>Dodana obsługa usuwania zapamiętanych informacji',
    'v0.6.6:<br>Dodano okienko dodawania do ekranu głównego (Android i iOS),<br>Aplikacja działa także bez internetu,<br>Dodana obsługa wysyłania e-maili',
    'v0.6.7 Kacper:<br>Eliminacja błędów (interpretacja kodu HTML),<br>Głosowa informacja o dacie oraz godzinie,<br>Aplikacja nie jest wymagana (problemy po odświeżeniu aplikacji, aplikacja zajmuje za dużo miejsca),<br>Asystent umie już liczyć, obsługuje podstawowe działania (+,-,*,/) i potęgowanie (^)',
    'v0.7:<br>Napisany od nowa kod,<br>Dodana opcja douczania Asystenta odpowiedzi na nieznane pytania,<br>Lepsza obsługa imienia',
    'v0.7.1 Ola:<br>Poprawiona obsługa poleceń uruchamiających akcje (zapamiętaj, otwórz, zapomnij),<br>Możliwość zmiany kolorów czatu <code>kolory <u>kolor tekstu</u> <u>kolor dymku</u></code>',
    'v0.7.2 Natalia:<br>Tłumaczenie z obcego języka na język polski',
    'v0.7.3:<br>Dodana opcja pytania o definicję z Wikipedii'
];

var jokes = [
    'Jak piją matematycy?#new#Na potęgę!',
    'Dlaczego alkoholicy nie pracują jako drwale?#new#Bo byliby ciągle narąbani',
    'Jak terrorysta rąbie drewno?#new#Z zamachem!',
    'Imię greckiego boga czystości?#new#Domestos',
    'Dlaczego matematyk na imprezie pije najmniej?#new#Bo tylko w pierwszej ćwiartce widzi same plusy',
    'Jaka książka razi prądem?#new#Przewodnik',
    'Co to jest 200 tysięcy podniesionych rąk?#new#100 tysięczna armia Francuska',
    'Czym się różni maturzysta od spirytusu?#new#Spirytus ma gwarantowane 90%',
    'Co robi matematyk podczas świąt?#new#Zadania z gwiazdką',
    'Jaki klucz nie otwiera żadnego zamka?#new#Wiolinowy'
]

var hello = [
    'Cześć!',
    'Hej!',
    'Hejo!',
    'Witaj!',
    'Siema!',
    'No siema, siema!'
]

var przepraszamDziekuje = [
    'Nie ma sprawy!',
    'Spoko',
    'Spoczi',
    'Spoczko',
    'Nie ma za co!'
]

var coTam = [
    'Co tam?',
    'Co tam u Ciebie?',
    'Jak leci?',
    'Co porabiasz?',
    'Co robisz?'
]

var imie = [
    'Jestem Aida',
    'Nazywam się Aida',
    'Jestem Aida, twój asystent głosowy',
    'Nazywam się Aida i jestem twoim asystentem'
]

var przyklady = [
    ['<span title="Przykład: Zapamiętaj 14 lutego są Walentynki" onclick="$(\'#clientInput\').val(\'Zapamiętaj 14 lutego są Walentynki\')>Zapamiętywać informacje</span>','html'],
    ['<span title="Przykład: Otwórz Facebooka" onclick="$(\'#clientInput\').val(\'Otwórz Facebooka\')>Otworzyć wybraną przez Ciebie stronę internetową</span>','html'],
    ['<span title="Przykład: Opowiedz dowcip" onclick="$(\'#clientInput\').val(\'Opowiedz dowcip\')>Opowiadać kawały</span>','html'],
    ['<span title="Przykład: Zadzwoń do +48123456789" onclick="$(\'#clientInput\').val(\'Zadzwoń do +48123456789\')>Wybrać numer telefonu</span>','html'],
    ['<span title="Przykład: Napisz do +48123456789, że Aida potrafi wysyłać SMSy" onclick="$(\'#clientInput\').val(\'Napisz do +48123456789, że Aida potrafi wysyłać SMSy\')>Napisać wiadomość SMS</span>','html'],
    ['<span title="Przykład: Kolory white hotpink" onclick="$(\'#clientInput\').val(\'Kolory white hotpink\')">Zmienić kolor czatu</span>','html'],
    'Kliknij i zobacz jak!'
];

howRU = [
    'Wszystko dobrze',
    'Fajnie, a tam?',
    'Leci',
    'W porządku'
];

var conversation = [''];