<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Piotr Sokołowski">
    <meta name="theme-color" content="#0091FE">
    <meta name="description" content="Aida to wirtualna asystentka stworzona na VIII Piknik Naukowy w Elektryku. Napisana została w języku JavaScript, co sprawia, że działa na każdej platformie.">

    <title>Aida - Podziękowania</title>

    <link rel="stylesheet" href="/asystent/css/main.css">

    <!-- Android -->
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="icon" href="favicon.png">
    <!-- iOS -->
    <link rel="apple-touch-icon" href="favicon.png">
    <link rel="apple-touch-startup-image" href="favicon.png">
</head>
<body>
    <?php include 'navbar.php'; ?>
    <main>
        <div id="header">
            <h1>Witaj, jestem Aida</h1>
        </div>
        <div id="subheader">
            <h2>Podziękowania</h2>
            <p>Chciałbym bardzo podziękować wszystkim moim przyjaciołom, którzy, mimo że nie pisali kodu Aidy, przyczynili się do powstania projektu i jego rozwoju. A są to:</p>
        </div>
        <article>
            <h2>Dorota Lisowska</h2>
            <p>Pomysłodawczyni imienia, to jej zawdzięczamy wygląd asystenta, wsparcie psychiczne</p>
        </article>
        <article>
            <h2>Kacper Szczerba</h2>
            <p>Główny <del>demotywator i psuja</del> łowca luk i błędów, nieustannie szuka nowych dziur w Aidzie, dzięki niemu ten projekt może być jeszcze lepszy</p>
        </article>
        <article>
            <h2>Krzysztof Klag, Tomasz Turek, Jakub Niemiec</h2>
            <p>Prawdziwi betatesterzy, doprowadzili do wyeliminowania wielu luk w asystencie, <del>demotywowanie</del> wsparcie mentalne</p>
        </article>
        <article>
            <h2>Maksymilian Motyka</h2>
            <p>Betatester, testy asystenta pod kątem kompatybilności na urządzeniach Apple</p>
        </article>
        <article>
            <h2>Mój komputer</h2>
            <p>Nie mam pojęcia jakim cudem dałem radę to wszystko na nim napisać i przetestować</p>
        </article>
        <article>
            <h2>Ja sam</h2>
            <p>Wyczerpany nieprzespanymi nocami i wypitymi litrami kawy programista, któremu tylko bzdury w głowie, czego przykładem jest ten oto program</p>
        </article>
    </main>
    <footer>
        &copy;2018&nbsp;|&nbsp;Piotr&nbsp;Sokołowski
    </footer>
    <!-- <script src="sw.js"></script> -->
</body>
</html>