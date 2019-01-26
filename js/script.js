$('#newInfo').hide();
$('#name').hide();
var i = 0;
var learn = {};

if (localStorage['aida-currentLang'] == undefined) location.replace('/');
if (localStorage['aida-color'] == undefined) localStorage.setItem('aida-color','#ffffff');
if (localStorage['aida-bgColor'] == undefined) localStorage.setItem('aida-bgColor','#0091fe');
if (localStorage['aida-rememberedList'] == undefined) localStorage.setItem('aida-rememberedList','');

class chatBot {
    constructor() {
        this.input;

        this.response = function (input) {
            input = input.trim()
            if (input !== null && input !== '') {
                return database[modify(input)];
            } else {
                return puste;
            }
        };

        this.learning = function (input) {
            input = input.trim()
            if (input !== null && input !== '') {
                return learn[modify(input)];
            } else {
                return puste;
            }
        };
        
        this.interaction = function (input) {
            input = input.trim()
            return interact(input)
        }
    }
}

var bot = new chatBot();
bot.input = $('#clientInput').val();

$('#clientInput').keydown(function(){
    if (event.key === 'Enter' && $('#clientInput').val() != '') {
        sendData();
        i = 0;
    } else if (event.key === 'ArrowUp') {
        i++;
        if (i > $('div.client').length) i = $('div.client').length;
        $('#clientInput').val($('div.client:nth-last-of-type('+i*2+')').text());
    } else if (event.key === 'ArrowDown') {
        i--;
        if (i < 0) i = 0;
        $('#clientInput').val($('div.client:nth-last-of-type('+i*2+')').text());
    }
});

$('#newInfo').keydown(function(){
    if (event.key === 'Enter' && $('#newInfo').val() != '') {
        addInfo();
    }
});

$('#name').keydown(function(){
    if (event.key === 'Enter' && $('#name').val() != '') {
        saveName();
    }
});

function modify(i) {
    i = i.toLowerCase();
    i = i.replace('ą','a');
    i = i.replace('ć','c');
    i = i.replace('ę','e');
    i = i.replace('ł','l');
    i = i.replace('ń','n');
    i = i.replace('ó','o');
    i = i.replace('ś','s');
    i = i.replace('ź','z');
    i = i.replace('ż','z');
    i = i.replace('.',' ');
    i = i.replace(',',' ');
    i = i.replace('?',' ');
    i = i.replace('!',' ');
    i = i.replace('  ',' ');
    i = i.trim();
    return i;
}

setInterval(function() {
    shuffle(hello);
    shuffle(jokes);
    shuffle(howRU);
    shuffle(przepraszamDziekuje);
},500);