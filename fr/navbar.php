<header>
    <div id="icon">
        <a href="./">
            <img class="animate" id="k1" src="/res/szablon1.png">
            <img class="animate" id="k2" src="/res/szablon2.png">
            <img class="animate" id="k3" src="/res/szablon3.png">
        </a>
    </div>
    <div class="left">
        <div class="name">
            <a href="./">
                <h1>Aida</h1>
            </a>
        </div>
    </div>
    <nav>
        <div><a href="./">Page&nbsp;d'accueil</a></div>
        <div></div>
    </nav>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>
        if (localStorage['aida-currentLang'] == undefined) localStorage.setItem('aida-currentLang',location.href.substr(-3,2));
        else localStorage['aida-currentLang'] = location.href.substr(-3,2);
        
        $('nav>div:last-child').append(`<a href="/${localStorage['aida-currentLang']}"><img src="/res/flags/${localStorage['aida-currentLang']}.png">${localStorage['aida-currentLang'].toUpperCase()}</a><div></div>`);

        $.ajax({
            url: '/lang.php',
            success: function(r){
                var lang = r.split(',');
                var count = lang.length;
                var langs = '';

                $('#ileJezykow').text(count);

                for (i=0;i<count;i++) {
                    if (r.split(',')[i] != localStorage['aida-currentLang']) {
                        $('header>nav>div>a+div').append(`<a href="/${r.split(',')[i]}"><img src="/res/flags/${r.split(',')[i]}.png">${r.split(',')[i].toUpperCase()}</a>`);
                    }
                }
            }
        });
    </script>
</header>