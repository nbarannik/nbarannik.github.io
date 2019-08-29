   var player;
  var videoItems = document.querySelectorAll('.vid');

 function OpenVideo() {
   for (var i = 0; i < videoItems.length; i++) {
     videoItems[i].style.display = 'block';
     }
 }

 function CloseVideo() {
   for (var i = 0; i < videoItems.length; i++) {
     videoItems[i].style.display = 'none';
     }
 }

 var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.playVideo();
    player.mute();
}
