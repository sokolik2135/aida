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


    <title>Aida - Votre assistant personnel!</title>
    
    <link rel="stylesheet" href="/css/main.css">

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
        include 'navbar.php';
    ?>
    <main>
        <div id="header">
            <h1>Bonjour, je suis Aida</h1>
        </div>
        <h1 style="font-size:60px;display:inline-flex;align-items:center;">Patience, page bientôt en français!</h1>
    </main>
    <footer>
        &copy;2018&nbsp;|&nbsp;Piotr&nbsp;Sokołowski
    </footer>
    <script>
        $('main>h1').append(`<img style="height:1em;width:initial;margin-left:20px;" src="/res/flags/${location.href.substr(-3,2)}.png">`)
    </script>
    
</body>
</html>