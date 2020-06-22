function onPageChange(link){
    window.location.href=link;
}

function onFlagClick(type){
    window.open("tekst/"+type, type, "width=500, height=200");
}

function findSound(type){
    var sound;

    switch(type) {
        case 'albanija':
            sound = 'alb';
        break;

        case 'bih':
            sound = 'bih';
        break;

        case 'bugarska':
            sound = 'bug';
        break;

        case 'srbija':
            sound = 'srb';
        break;

        case 'rumunija':
            sound = 'rum';
        break;

        case 'crnagora':
            sound = 'cng';
        break;

        case 'madjarska':
            sound = 'mdj';
        break;

        case 'makedonija':
            sound = 'mac';
        break;
    }

    return sound + '_zas.mp3';
}

function onFlagHover(type){
    var audio = new Audio("zvuk/"+findSound(type));
    audio.play();
}