console.log('howdy friend');

window.onload = function (){
  var clickPlay = document.getElementById('soundbox');
  clickPlay.addEventListener('click', playSound);

}

var mp3s = ['sounds/one.mp3','sounds/two.mp3', 'sounds/three.mp3', 'sounds/four.mp3', 'sounds/five.mp3', 'sounds/six.mp3', 'sounds/seven.mp3', 'sounds/eight.mp3'];

var randMp3 = mp3s[Math.floor(Math.random()*mp3s.length)];
// randmp3 = a song

soundManager.setup({

  url: '/swf/',

  // good to go: the onready() callback

  onready: function() {
  }
});

function playSound(){
  var randMp3 = mp3s[Math.floor(Math.random() * mp3s.length)];  
  var mySound = soundManager.createSound({
  url: randMp3
  });
  mySound.play(); 
}
