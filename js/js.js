var mp3s = ['/sounds/one.mp3','/sounds/two.mp3', '/sounds/three.mp3', '/sounds/four.mp3', '/sounds/five.mp3', '/sounds/six.mp3', '/sounds/seven.mp3', '/sounds/eight.mp3'];


// myPlayer.getSound = function () {
//   if(!this.currentSound) {
//     this.currentSound = soundManager.createSound({
//       // for(i = 0; i < Mp3s.length; i++) {
//       //   Mp3s[Math.floor[Math.random()*Mp3s.length]];
      
//       id: 'one',
//       url: '/sounds/one.mp3',
//       autoplay: true

//     });
//   }
//   return this.currentSound;
// }

// myPlayer.currentSound = null;
   

soundManager.setup({
  url: '/path/to/swf-files/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    // Ready to use; soundManager.createSound() etc. can now be called.
  }
});
