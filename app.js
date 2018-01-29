<!DOCTYPE html>
<html>
  <body>
  
        <!-- <div id="sound" style="display: none; top: -9999; left: -9999" ></div> -->
        <div id="bg_vid" style="position: fixed; z-index: -99; width: 100%; height: 100%"></div>
     
    
     <div style="display: none">
            <iframe frameborder="0" height="100%" width="100%" 
              src="https://youtube.com/embed/q76bMs-NwRk?autoplay=1&controls=0&showinfo=0&autohide=1&rel=0&loop=1">
            </iframe>
          </div>

          <div style="display: none">
                <iframe frameborder="0" height="100%" width="100%" 
                  src="https://youtube.com/embed/n0svuurLibQ?autoplay=1&controls=0&showinfo=0&autohide=1&rel=0&loop=1">
                </iframe>
              </div>    

    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    
      
    
      
      var player;
      function onYouTubeIframeAPIReady(){
          player = new YT.Player('bg_vid', {
            videoId: 'VhQWF-H6eNU',
            playerVars: { 'rel': 0, 'autoplay': 1, 'controls': 0, 'loop': 1, 'showinfo': 0 },
              events: {
                  'onReady': onPlayerReady
              }
          });
      }

      function onPlayerReady() {
          player.setVolume(0);
      }
    </script>
  </body>
</html>