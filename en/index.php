<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Piotr Sokołowski">
    <meta name="theme-color" content="#0091FE">
    <meta name="description" content="Aida is a virtual assistant created for VIII Science Picnic in ZSEM. It was written in JavaScript, making Aida working on every platform.">
    <meta name="keywords" content="aida, asystent, assistant, piotr, sokolowski, sokołowski, piknik naukowy, elektryk, zsem, nowy sącz, nowy sacz, sacz, sącz, javascript, js">


    <title>Aida - Your personal assistant!</title>
    
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
    <img id="top" src="/res/top.png">
    <div id="conversation">
        <div id="messages">
            <div id="icon">
                <img class="animate" id="k1" src="/res/szablon1.png">
                <img class="animate" id="k2" src="/res/szablon2.png">
                <img class="animate" id="k3" src="/res/szablon3.png">
            </div>
        </div>
        <input type="text" name="clientInput" id="clientInput" autofocus>
        <input type="text" name="newInfo" id="newInfo">
        <input type="text" name="name" id="name">
        <div id="send" onclick="sendData()"></div>
    </div>
    <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/info.js"></script>
    <script src="/js/script.js"></script>
    <script src="js/functions.js"></script>
    <script src="js/data.js"></script>
    
    <?php
    } else {
        include 'navbar.php';
        ?>
    <main>
        <div id="header">
            <h1>Hi, I'm Aida</h1>
        </div>
        <article>
            <h2>Who is Aida?</h2>
            <p>Aida is a virtual assistant created for VIII Science Picnic in ZSEM. It was written in JavaScript, making Aida working on every platform.</p>
        </article>
        <article>
            <h2>Where did the idea come from?</h2>
            <p>Initially it was only joke made to show disadvantages of JavaScript, however, with time it turned out that the project makes sense, it gained the present name at that time.</p>
        </article>
        <article>
            <h2>How is Aida popular?</h2>
            <p>Aida has already been enabled and activated by typing name on <span id="devices"></span> devices.</p>
        </article>

        <article>
            <h2>On what device will the Assistant work?</h2>
            <p>The vast majority. JavaScript language is interpreted in the same way by every browser, so it doesn't matter, if it will be a computer with Windows, macOS, Linux, or phone with Android or iOS.</p>
        </article>
        <article>
            <h2>What languages Aida knows?</h2>
            <p>Currently Aida knows <span id="ileJezykow"></span> languages: <span id="jezyki"></span>.</p>
        </article>
        <article>
            <h2>What's next?</h2>
            <p>I hope there will be further development of Assistant, introduction of better and better solutions and improvements. Maybe someday even deeper integration with device like e.g. modifying system settings.</p>
        </article>
        <a id="online" href="./?online">Launch in browser</a>
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

        $.ajax({
            url: '/lang.php',
            success: function(r){
                var tmp = r.replace('en','English').replace('pl','Polish').replace('de','German').replace('fr','French').replace('it','Italian');
                var lang = tmp.split(',');
                var count = lang.length;

                $('#ileJezykow').text(count);
                lang = lang.sort().join(', ');
                $('#jezyki').text(lang);
            }
        });
    </script>
    
    <?php
        }
    ?>
</body>
</html>