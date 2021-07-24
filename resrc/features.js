$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

var arrsrc = ["srcAudio1", "srcAudio2", "srcAudio3"];
var arr = ["playAudio1", "playAudio2", "playAudio3"];
arr.forEach(function(item, i, arr) {
  document.getElementById(item).addEventListener("click", function(){
    var playaudio = document.getElementById(item);
    var audio = document.getElementById(arrsrc[i]);
  if(this.className == "playAudio is-playing"){
    this.className = "playAudio";
    audio.pause();
  }else{
    this.className = "playAudio is-playing";
    audio.play();
  }
});
});