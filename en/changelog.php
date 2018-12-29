<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Piotr Sokołowski">
    <meta name="theme-color" content="#0091FE">
    <meta name="description" content="Aida is a virtual assistant created for VIII Science Picnic in ZSEM. It was written in JavaScript, making Aida working on every platform.">

    <title>Aida - Changelog</title>

    <link rel="stylesheet" href="/css/main.css">

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
        
    </main>
    <footer>
        &copy;2018&nbsp;|&nbsp;Piotr&nbsp;Sokołowski
    </footer>
    <script src="js/info.js"></script>
    <script>
        for (var v of changelog) {
            $('main').prepend('<article><h2>'+v.substr(0,v.indexOf('<'))+'</h2><p>'+v.substr(v.indexOf('>')+1)+'</p></article>');
        }
        $('main').prepend('<div id="header"><h1>Hi, I\'m Aida</h1></div>');
    </script>
    <!-- <script src="sw.js"></script> -->
</body>
</html>