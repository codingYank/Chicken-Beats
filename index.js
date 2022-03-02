if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready())
}else{
    ready()
}

function ready(){
    var playButton = document.getElementsByClassName('btn-play')
    for (var i = 0; i < playButton.length; i++) {
        var button = playButton[i]
        button.addEventListener("click", play) 
    }
}

function play(){
    var music = new Audio('chickenSong.mp3')
    music.play()
}