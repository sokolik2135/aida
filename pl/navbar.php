<header>
    <div id="icon">
        <a href="./">
            <img class="animate" id="k1" src="/asystent/res/szablon1.png">
            <img class="animate" id="k2" src="/asystent/res/szablon2.png">
            <img class="animate" id="k3" src="/asystent/res/szablon3.png">
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
        <div><a href="./">Strona&nbsp;główna</a></div>
        <div><a href="thanks.php">Podziękowania</a></div>
        <div><a href="changelog.php">Dziennik&nbsp;zmian</a></div>
        <div><a href="./?online">Uruchom</a></div>
        <div></div>
    </nav>
    <script src="/asystent/js/jquery.js"></script>
    <script>
        if (localStorage['aida-currentLang'] == undefined) localStorage.setItem('aida-currentLang',location.href.substr(-3,2));
        else localStorage['aida-currentLang'] = location.href.substr(-3,2);

        $('nav>div:last-child').append(`<a href="/asystent/${localStorage['aida-currentLang']}"><img src="/asystent/res/flags/${localStorage['aida-currentLang']}.png">${localStorage['aida-currentLang'].toUpperCase()}</a><div></div>`);

        $.ajax({
            url: '/asystent/lang.php',
            success: function(r){
                var lang = r.split(',');
                var count = lang.length;
                var langs = '';

                $('#ileJezykow').text(count);

                for (i=0;i<count;i++) {
                    if (r.split(',')[i] != localStorage['aida-currentLang']) {
                        $('header>nav>div>a+div').append(`<a href="/asystent/${r.split(',')[i]}"><img src="/asystent/res/flags/${r.split(',')[i]}.png">${r.split(',')[i].toUpperCase()}</a>`);
                    }
                }
            }
        });
    </script>
</header>