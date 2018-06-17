/*
*
* video module
*
*/

// select video
var el = document.querySelector('video');

// Video
var video = (function(d, el) {


    function play() {
        el.play();
    }

    function stop() {
        el.pause();
    }


    function increase() {
        el.volume+=0.1
    }

    function volume (step) {
        el.volume = step/10;
    }


    function decrease() {
        el.volume-=0.1
    }


    function changeSource(param1) {
        var source = d.querySelector('#url');
        source.setAttribute("src", param1);
        el.load();
    }


    return {

        videoplay: play,
        videostop: stop,
        videoincrease: increase,
        videodecrease: decrease,
        changeSource: changeSource,
        volume: volume

    }

    
    
})(document, el);

// Dom
var app = (function(d, v) {


      // Video
      var btnplay = d.querySelector('#play');
      var btnpause = d.querySelector('#pause');
      var btnincrease = d.querySelector('#increase');
      var btndecrease = d.querySelector('#decrease');
      var btnvolume = document.getElementById('volume');

      //var istance = video.el  

      btnplay.addEventListener('click', v.videoplay);
      btnpause.addEventListener('click', v.videostop);
      btnincrease.addEventListener('click', v.videoincrease);
      btndecrease.addEventListener('click', v.videodecrease);
      btnvolume.addEventListener('change', function(e) {
        v.volume(e.target.value);
    });



      
       var btninvio = d.querySelector('#pulsanteinvio');
       btninvio.addEventListener('click', function(){

           var urlvideo = d.querySelector('#urlvideo');
           v.changeSource(urlvideo.value)
    
       });
       



  

    
        
})(document, video);




/*
video.play();
console.log(video.play());
*/

