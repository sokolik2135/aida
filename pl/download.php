<?php
    $useragent = $_SERVER['HTTP_USER_AGENT'];
    if (preg_match('/windows phone/i',$useragent)) {
        $detect = 'Windows Phone';
        $sprzet = 'telefon';
    } elseif (preg_match('/win/i',$useragent)) {
        $detect = 'Windows';
        $sprzet = 'komputer';
        $link32 = 'https://github.com/sokolik2135/aida/releases/download/v1.0_x32.exe';
        $link64 = 'https://github.com/sokolik2135/aida/releases/download/v1.0_x64.exe';
    } elseif (preg_match('/Android/i',$useragent)) {
        $detect = 'Android';
        $sprzet = 'telefon';
    } elseif (preg_match('/bb/i',$useragent)) {
        $detect = 'BlackBerry';
        $sprzet = 'telefon';
    } elseif (preg_match('/nokia/i',$useragent)) {
        $detect = 'Nokii';
        $sprzet = 'telefon';
    } elseif (preg_match('/iPad/i',$useragent) || preg_match('/iPhone/i',$useragent) || preg_match('/iPod/i',$useragent)) {
        $detect = 'iOS';
        $sprzet = 'telefon';
    } elseif (preg_match('/linux/i',$useragent)) {
        $detect = 'Linux (Debian)';
        $sprzet = 'komputer';
        $link32 = 'https://github.com/sokolik2135/aida/releases/download/v1.0_i386.deb';
        $link64 = 'https://github.com/sokolik2135/aida/releases/download/v1.0_amd64.deb';
    } elseif (preg_match('/mac/i',$useragent)) {
        $detect = 'macOS';
        $sprzet = 'komputer';
        $link = 'https://github.com/sokolik2135/aida/releases/download/v1.0_macOS_x64.zip';
    }
    echo '
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Piotr Sokołowski">
    <meta name="theme-color" content="#0091FE">
    <meta name="description" content="Aida to wirtualna asystentka stworzona na VIII Piknik Naukowy w Elektryku. Napisana została w języku JavaScript, co sprawia, że działa na każdej platformie.">

    <title>Aida - Pobierz</title>

    <link rel="stylesheet" href="/css/download.css">

    <!-- Android -->
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="icon" href="favicon.png">
    <!-- iOS -->
    <link rel="apple-touch-icon" href="favicon.png">
    <link rel="apple-touch-startup-image" href="favicon.png">
</head>
<body>
    '.include 'navbar.php'.'
    <div id="content">
        <div id="icon">
            <img class="animate" id="k1" src="res/szablon1.png">
            <img class="animate" id="k2" src="res/szablon2.png">
            <img class="animate" id="k3" src="res/szablon3.png">
        </div>
        <h1>Aida</h1>
        <h2>Pobierz już teraz na swój '.$sprzet.'!</h2>
        <p>Pliki dostępne dla '.$detect.'</p>';
        if ($detect == 'Windows' || $detect == 'Linux (Debian)') {
            echo '<a href="'.$link32.'"><button>Pobierz plik dla systemu '.$detect.' 32-bit</button></a><br>';
            echo '<a href="'.$link64.'"><button>Pobierz plik dla systemu '.$detect.' 64-bit</button></a><br>';
            echo '<button class="add-button">Dodaj aplikację dla systemu '.$detect.'</button>';
        } elseif ($detect == 'macOS') {
            echo '<a href="'.$link.'"><button>Pobierz plik dla systemu '.$detect.'</button></a><br>';
            echo '<button class="add-button">Dodaj aplikację dla systemu '.$detect.'</button>';
        } elseif ($sprzet == 'telefon') {
            echo '<button class="add-button">Dodaj aplikację dla systemu '.$detect.'</button>';
        } else {
            echo '<button>Brak dostępnych plików...</button>';
        }
        echo '
        <p><a href="https://github.com/sokolik2135/aida/releases">'.$detect.' to nie twój system? Kliknij tutaj</a></p>
    </div>
    <!-- <script src="sw.js"></script> -->
    <script>
        let deferredPrompt;
        const addBtn = document.querySelector(\'.add-button\');
        addBtn.style.display = \'none\';
        
        window.addEventListener(\'beforeinstallprompt\', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            addBtn.style.display = \'block\';
          
            addBtn.addEventListener(\'click\', (e) => {
                // hide our user interface that shows our A2HS button
                addBtn.style.display = \'none\';
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === \'accepted\') {
                        console.log(\'User accepted the A2HS prompt\');
                    } else {
                        console.log(\'User dismissed the A2HS prompt\');
                    }
                    deferredPrompt = null;
                });
            });
        });
    </script>
</body>
</html>';