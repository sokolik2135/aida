<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aida - Your personal assistant!</title>
    <style>
        @font-face {
            font-family: 'Open Sans';
            src: url('fonts/OpenSans-Light.ttf') format('truetype');
        }
        html,
        body,
        #languages {
            margin: 0;
            padding: 0;
            min-height: 100%;
            font-family: 'Open Sans';
        }
        body {
            padding-top: 50px;
            min-height: calc(100% - 50px);
        }
        #header {
            width: calc(100% - 40px);
            padding: 0 20px;
            height: 300px;
            margin-bottom: 50px;
            background: url('favicon.png') no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #header > h1 {
            margin-top: 0;
            width: 100%;
            text-align: right;
            position: absolute;
            opacity: 0;
            right: 20px;
        }
        #languages {
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
        #languages > a {
            text-decoration: none;
            color: currentColor;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            padding: 30px;
            border: 1px solid #0091fe;
            color: #0091fe;
            border-radius: 100px;
            transition: 0.5s;
            text-transform: uppercase;
            margin: 0 20px;
        }
        #languages > a:hover {
            color: white;
            background: #0091fe;
        }
        img {
            width: initial;
            height: 1em;
            margin-right: 20px;
        }
        a[title*="Hosted on free web hosting 000webhost.com. Host your own website for FREE."] {
            display: none;
        }
        @media screen and (max-width: 767px) {
            #languages > div {
                margin: 20px;
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div id="header"></div>
    <div id="languages"></div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>
        var hello = {
            'pl':'Witaj, jestem Aida',
            'en':'Hi, I\'m Aida',
            'de':'Hallo, ich bin Aida',
            'fr':'Bonjour, je suis Aida',
            'it':'Scegli la tua lingua'
        }

        $.ajax({
            url: './lang.php',
            success: function(r){
                var lang = r.split(',');
                    for (var i of lang) {
                        $('#languages').append(`<a href="/${i}"><img src="/res/flags/${i}.png">${i}</a>`);
                        $('#header').append(`<h1>${hello[i]}</h1>`)
                    }
            }
        });
        
        var counter = 0;
        setInterval(() => {
            $(`#header>h1`).animate({opacity:'0'},'slow');
            $(`#header>h1:nth-child(${(counter%($('#languages>a').text().match(/.{2}/g).length))+1})`).animate({opacity:'1'},'slow');
            counter++;
        }, 5000);

        if (localStorage['aida-currentLang'] != undefined) {
            location.replace('/'+localStorage['aida-currentLang']+'/');
        }
    </script>
</body>
</html>