<?php
    if (isset($_GET['a'])) header('Location: /.hidden.d');
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Piotr Sokołowski">
    <meta name="theme-color" content="#0091FE">
    <meta name="description" content="Aida to wirtualna asystentka stworzona na VIII Piknik Naukowy w Elektryku. Napisana została w języku JavaScript, co sprawia, że działa na każdej platformie.">
    <meta name="keywords" content="aida, asystent, piotr, sokolowski, sokołowski, piknik naukowy, elektryk, zsem, nowy sącz, nowy sacz, javascript, js"/>


    <title>Aida - Twój osobisty asystent!</title>
    
    <?php
        if (isset($_GET['online'])) {
            echo '<link rel="stylesheet" href="/css/style.css">';
        } else {
            echo '<link rel="stylesheet" href="/css/main.css">';
        }
    ?>
    
    <!-- Android -->
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.png" type="image/png">
    <link rel="icon" href="/favicon.png">
    <!-- iOS -->
    <link rel="apple-touch-icon" href="favicon.png">
    <link rel="apple-touch-startup-image" href="favicon.png">
</head>
<body>
<?php
    $useragent = $_SERVER['HTTP_USER_AGENT'];
    if (preg_match('/asystent-app/i',$useragent)) {
        header('Location: /?online');
    }
    if (isset($_GET['online'])) {
        ?>
    <div id="bg"></div>
    <div id="sp">
        <div>
            <div id="title">
                <h1>Aida</h1>
            </div>
            <div id="sp_icon">
                <img class="animate" id="sp_k1" src="/res/szablon1.png">
                <img class="animate" id="sp_k2" src="/res/szablon2.png">
                <img class="animate" id="sp_k3" src="/res/szablon3.png">
            </div>
        </div>
    </div>
    <!-- <div id="info">
        <span class="battery"></span>
        <span class="clock"></span>
    </div> -->
    <img id="top" src="/res/top.png">
    <div id="conversation">
        <div id="messages">
            <div id="icon">
                <img class="animate" id="k1" src="/res/szablon1.png">
                <img class="animate" id="k2" src="/res/szablon2.png">
                <img class="animate" id="k3" src="/res/szablon3.png">
            </div>
        </div>
        <div id="voice" onclick="voiceInput()"></div>
        <input type="text" name="clientInput" id="clientInput" autofocus placeholder="Napisz wiadomość...">
        <input type="text" name="newInfo" id="newInfo">
        <input type="text" name="name" id="name">
        <div id="send" onclick="sendData()"></div>
    </div>
    <script src="/js/responsivevoice.js"></script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/info.js"></script>
    <script src="/js/script.js"></script>
    <script src="/js/functions.js"></script>
    <script src="/js/data.js"></script>
    <script src="/sw.js"></script>
    
    <?php
    } else {
        include 'navbar.php';
        ?>
    <main>
        <div id="header">
            <h1>Witaj, jestem Aida</h1>
        </div>
        <article>
            <h2>Kim jest Aida?</h2>
            <p>Aida to wirtualna asystentka stworzona na VIII Piknik Naukowy w Elektryku. Napisana została w języku JavaScript, co sprawia, że działa na każdej platformie.</p>
        </article>
        <article>
            <h2>Skąd pomysł?</h2>
            <p>Początkowo był to jedynie żart mający pokazać wady JavaScript'u, jednak z czasem okazało się, że projekt ma sens, zyskał wtedy obecne imię.</p>
        </article>
        <article>
            <h2>Jak popularna jest już Aida?</h2>
            <p>Aida już została włączona i aktywowana przez przedstawienie się jej na <span id="devices"></span> urządzeniach.</p>
        </article>

        <article>
            <h2>Na jakim urządzeniu zadziała Asystent?</h2>
            <p>Na zdecydowanej większości. Język JavaScript jest intepretowany tak samo przez każdą przeglądarkę, więc nieważne, czy to będzie komputer z Windowsem, macOS, Linuxem, czy też telefon z Androidem lub iOS.</p>
        </article>
        <article>
            <h2>Jakie języki obsługuje Asystent?</h2>
            <p>Obecnie Aida zna język polski, jednak możliwe jest wprowadenie innych języków.</p>
        </article>
        <article>
            <h2>Co dalej?</h2>
            <p>Mam nadzieję, że dalszy rozwój asystentki, wprowadzanie coraz lepszych rozwiązań i usprawnień. Może kiedyś nawet głębsza integracja z urządzeniem jak na przykład modyfikacja ustawień.</p>
        </article>
        <a id="online" href="./?online">Uruchom w przeglądarce</a>
    </main>
    <footer>
        &copy;2018&nbsp;|&nbsp;Piotr&nbsp;Sokołowski
    </footer>
    <script>
        $.ajax({
            url: '/dev/licznik.txt',
            success: function(r){
                $('#devices').text(r);
            }
        });
    </script>
    <script src="/sw.js"></script>
    
    <?php
        }
    ?>
</body>
</html>