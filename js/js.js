//holds click action until window loads
window.onload = function (){
  var clickPlay = document.getElementById('soundbox');
  clickPlay.addEventListener('click', playSound);
}

//array of mp3s
var mp3s = ['sounds/one.mp3','sounds/two.mp3', 'sounds/three.mp3', 'sounds/four.mp3', 'sounds/five.mp3', 'sounds/six.mp3', 'sounds/seven.mp3', 'sounds/eight.mp3'];

soundManager.setup({
  url: '/swf/',
  onready: function() {
  }
});

//plays sound, randomly generating new clip with each click
function playSound(){
  var randMp3 = mp3s[Math.floor(Math.random() * mp3s.length)];  
  var mySound = soundManager.createSound({
  url: randMp3
  });
  mySound.play(); 
}
