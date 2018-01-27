'use strict';

var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          //height: '390',
          //width: '640',
          videoId: '5hPS-3zQCzQ',
          playerVars: { 'rel': 0, 'autoplay': 1, 'controls': 0, 'loop': 1, 'showinfo': 0 },
          events: {
            'onReady': onPlayerReady,
            //'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.setVolume(0);
        event.target.playVideo();
      }



//######################################################################################
    //   var tagTwo = document.createElement('script');

    //   tagTwo.src = "https://www.youtube.com/iframe_api";
    //   var firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tagTwo, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var sound;
      function onYouTubeIframeAPIReady() {
        sound = new YT.Player('sound', {
          //height: '390',
          //width: '640',
          videoId: 'q76bMs-NwRk',
          playerVars: {'loop': 1, 'autoplay': 1},
          events: {
            'onReady': onPlayerTwoReady,
            //'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerTwoReady(event) {
        event.target.setVolume(100);
        event.target.playVideo();
      }
